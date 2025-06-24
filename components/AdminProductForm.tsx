import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { MOCK_CATEGORIES } from '../constants';

interface AdminProductFormProps {
  product: Product | null; // Product to edit, or null for new product
  onSave: (product: Product) => void;
  onCancel: () => void;
}

const AdminProductForm: React.FC<AdminProductFormProps> = ({ product, onSave, onCancel }) => {
  const initialFormState: Product = {
    id: '', name: '', description: '', price: 0, category: MOCK_CATEGORIES[0]?.name || '', 
    imageUrl: '', rating: 0, reviews: 0, stock: 0, slug: '',
    features: [], faqs: [], images: [], isFeatured: false, isTrending: false,
  };

  const [formData, setFormData] = useState<Product>(initialFormState);

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData(initialFormState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    let processedValue: string | number | boolean = value;
    if (type === 'number') {
        processedValue = parseFloat(value) || 0;
    } else if (type === 'checkbox') {
        processedValue = (e.target as HTMLInputElement).checked;
    }
    
    setFormData(prev => ({ ...prev, [name]: processedValue }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.price || !formData.category || !formData.slug) {
        alert("Please fill in Name, Price, Category, and Slug.");
        return;
    }
    onSave({ ...formData, slug: formData.slug || formData.name.toLowerCase().replace(/\s+/g, '-') }); // Auto-generate slug if empty
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
      <h4 className="text-xl font-semibold mb-4">{product ? 'Edit Product' : 'Add New Product'}</h4>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full p-2 border rounded-md"/>
            </div>
            <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700">Slug (URL identifier)</label>
                <input type="text" name="slug" id="slug" value={formData.slug} onChange={handleChange} required className="mt-1 block w-full p-2 border rounded-md" placeholder="e.g., magic-vegetable-chopper"/>
            </div>
        </div>
        
        <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" id="description" value={formData.description} onChange={handleChange} rows={3} className="mt-1 block w-full p-2 border rounded-md"></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                <input type="number" name="price" id="price" value={formData.price} onChange={handleChange} required step="0.01" className="mt-1 block w-full p-2 border rounded-md"/>
            </div>
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select name="category" id="category" value={formData.category} onChange={handleChange} required className="mt-1 block w-full p-2 border rounded-md">
                    {MOCK_CATEGORIES.map(cat => <option key={cat.id} value={cat.name}>{cat.name}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
                <input type="number" name="stock" id="stock" value={formData.stock} onChange={handleChange} required className="mt-1 block w-full p-2 border rounded-md"/>
            </div>
        </div>

        <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Main Image URL</label>
            <input type="text" name="imageUrl" id="imageUrl" value={formData.imageUrl} onChange={handleChange} className="mt-1 block w-full p-2 border rounded-md" placeholder="https://picsum.photos/seed/yourproduct/400/300"/>
        </div>
        {/* Add fields for images, features, faqs if needed with more complex inputs */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="flex items-center">
                <input type="checkbox" name="isFeatured" id="isFeatured" checked={formData.isFeatured} onChange={handleChange} className="h-4 w-4 text-amazon-yellow border-gray-300 rounded focus:ring-amazon-yellow"/>
                <label htmlFor="isFeatured" className="ml-2 block text-sm text-gray-900">Featured Product</label>
            </div>
             <div className="flex items-center">
                <input type="checkbox" name="isTrending" id="isTrending" checked={formData.isTrending} onChange={handleChange} className="h-4 w-4 text-amazon-yellow border-gray-300 rounded focus:ring-amazon-yellow"/>
                <label htmlFor="isTrending" className="ml-2 block text-sm text-gray-900">Trending Product</label>
            </div>
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
          <button type="submit" className="bg-amazon-yellow text-amazon-DEFAULT px-4 py-2 rounded-md hover:bg-opacity-90">{product ? 'Update' : 'Add'} Product</button>
        </div>
      </form>
    </div>
  );
};

export default AdminProductForm;