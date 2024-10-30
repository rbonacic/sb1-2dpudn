import React, { useState } from 'react';
import { Upload, X, Plus } from 'lucide-react';
import type { Preset } from '../types';

interface PresetFormData {
  title: string;
  description: string;
  price: number;
  compatibility: string[];
  beforeImage: File | null;
  afterImage: File | null;
}

const initialFormData: PresetFormData = {
  title: '',
  description: '',
  price: 0,
  compatibility: ['Lightroom Mobile', 'Lightroom Desktop'],
  beforeImage: null,
  afterImage: null,
};

export default function AdminPresets() {
  const [formData, setFormData] = useState<PresetFormData>(initialFormData);
  const [previewBefore, setPreviewBefore] = useState<string>('');
  const [previewAfter, setPreviewAfter] = useState<string>('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'before' | 'after') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (type === 'before') {
        setPreviewBefore(reader.result as string);
        setFormData(prev => ({ ...prev, beforeImage: file }));
      } else {
        setPreviewAfter(reader.result as string);
        setFormData(prev => ({ ...prev, afterImage: file }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically:
    // 1. Upload images to your storage (e.g., S3, Cloudinary)
    // 2. Save preset data to your database
    // 3. Update the UI with the new preset
    
    console.log('Submitting preset:', formData);
    
    // Reset form
    setFormData(initialFormData);
    setPreviewBefore('');
    setPreviewAfter('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Upload New Preset</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              value={formData.price}
              onChange={e => setFormData(prev => ({ ...prev, price: Number(e.target.value) }))}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            rows={3}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Before Image
            </label>
            <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={e => handleImageChange(e, 'before')}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
              {previewBefore ? (
                <div className="relative aspect-video">
                  <img
                    src={previewBefore}
                    alt="Before preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewBefore('');
                      setFormData(prev => ({ ...prev, beforeImage: null }));
                    }}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-4">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Upload before image</p>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              After Image
            </label>
            <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={e => handleImageChange(e, 'after')}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
              {previewAfter ? (
                <div className="relative aspect-video">
                  <img
                    src={previewAfter}
                    alt="After preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreviewAfter('');
                      setFormData(prev => ({ ...prev, afterImage: null }));
                    }}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-4">
                  <Upload className="w-8 h-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Upload after image</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Compatibility
          </label>
          <div className="flex flex-wrap gap-2">
            {formData.compatibility.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"
              >
                <span>{item}</span>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({
                    ...prev,
                    compatibility: prev.compatibility.filter((_, i) => i !== index)
                  }))}
                  className="p-1 hover:bg-gray-200 rounded-full"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => {
                const newItem = prompt('Enter compatibility item:');
                if (newItem) {
                  setFormData(prev => ({
                    ...prev,
                    compatibility: [...prev.compatibility, newItem]
                  }));
                }
              }}
              className="flex items-center gap-1 text-sm text-gray-600 hover:text-black"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Upload Preset
        </button>
      </form>
    </div>
  );
}