
import React, { useState } from 'react';
import { Product, Order as OrderType } from '../types';
import { MOCK_PRODUCTS } from '../constants'; // Using MOCK_PRODUCTS as initial state
import AdminProductForm from '../components/AdminProductForm';

// Mock Orders for Admin View
const MOCK_ADMIN_ORDERS: OrderType[] = [
  { 
    id: 'ORD001', 
    items: [{ id: '1', name: 'Magic Vegetable Chopper', price: 19.99, quantity: 1, category: 'Kitchen', imageUrl: 'https://picsum.photos/seed/vegchopper/100/100', description:'', rating:0, reviews:0, stock:0, slug:'magic-vegetable-chopper' }],
    totalAmount: 19.99, 
    customerInfo: {name: 'John Doe', email:'j@d.com', phone:'123'}, 
    shippingAddress: {street:'123', city:'any', state:'CA', zipCode:'123', country:'US'},
    paymentMethod: 'Credit Card',
    status: 'Delivered', 
    orderDate: new Date('2023-10-01'), 
    estimatedDelivery: new Date('2023-10-05') 
  },
   { 
    id: 'ORD003', 
    items: [{ id: '2', name: 'Cozy Throw Blanket', price: 29.99, quantity: 1, category: 'Home', imageUrl: 'https://picsum.photos/seed/blanket/100/100', description:'', rating:0, reviews:0, stock:0, slug:'cozy-throw-blanket' }],
    totalAmount: 29.99, 
    customerInfo: {name: 'Jane Smith', email:'jane@s.com', phone:'456'}, 
    shippingAddress: {street:'456 Oak', city:'Othertown', state:'NY', zipCode:'10001', country:'US'},
    paymentMethod: 'Stripe',
    status: 'Processing', 
    orderDate: new Date('2023-11-20'), 
    estimatedDelivery: new Date('2023-11-25') 
  },
];


const AdminDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'banners' | 'inventory'>('products');
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [orders, setOrders] = useState<OrderType[]>(MOCK_ADMIN_ORDERS);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showProductForm, setShowProductForm] = useState(false);

  const handleAddProduct = (newProduct: Product) => {
    setProducts(prev => [...prev, { ...newProduct, id: `prod-${Date.now()}` }]); // Simple ID generation
    setShowProductForm(false);
  };

  const handleUpdateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
    setShowProductForm(false);
    setEditingProduct(null);
  };
  
  const handleDeleteProduct = (productId: string) => {
    if(window.confirm("Are you sure you want to delete this product?")) {
        setProducts(prev => prev.filter(p => p.id !== productId));
    }
  };

  const openEditForm = (product: Product) => {
    setEditingProduct(product);
    setShowProductForm(true);
  };

  const openNewForm = () => {
    setEditingProduct(null);
    setShowProductForm(true);
  };

  const renderProductsTab = () => (
    <div>
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-800">Manage Products</h3>
            <button onClick={openNewForm} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                <i className="fas fa-plus mr-2"></i>Add New Product
            </button>
        </div>
        {showProductForm && (
            <AdminProductForm 
                product={editingProduct} 
                onSave={editingProduct ? handleUpdateProduct : handleAddProduct}
                onCancel={() => { setShowProductForm(false); setEditingProduct(null); }}
            />
        )}
        <div className="overflow-x-auto bg-white shadow rounded-lg mt-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products.map(product => (
                        <tr key={product.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{product.price.toFixed(2)}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                <button onClick={() => openEditForm(product)} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                                <button onClick={() => handleDeleteProduct(product.id)} className="text-red-600 hover:text-red-900">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );

  const renderOrdersTab = () => (
     <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">View Orders</h3>
        <div className="overflow-x-auto bg-white shadow rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customerInfo.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.orderDate.toLocaleDateString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{order.totalAmount.toFixed(2)}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 
                                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                    'bg-gray-100 text-gray-800'
                                }`}>
                                    {order.status}
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-indigo-600 hover:text-indigo-900">View Details</button>
                                {/* Add update status functionality here */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
  
  const renderBannersTab = () => (
    <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Manage Banners</h3>
        <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-600 mb-2">Upload new banners for the homepage carousel or promotional sections.</p>
            <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amazon-yellow file:text-amazon-DEFAULT hover:file:bg-opacity-90"/>
            <p className="mt-4 text-gray-500">Current banners (placeholder):</p>
            <div className="mt-2 space-y-2">
                <div className="p-2 border rounded flex justify-between items-center"><span>Homepage Banner 1 (Sale)</span> <button className="text-red-500 text-xs">Delete</button></div>
                <div className="p-2 border rounded flex justify-between items-center"><span>Category Offer Banner (Kitchen)</span> <button className="text-red-500 text-xs">Delete</button></div>
            </div>
        </div>
    </div>
  );

  const renderInventoryTab = () => (
     <div>
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Manage Inventory</h3>
         <p className="text-gray-600">Inventory management details would be displayed here. (e.g., low stock alerts, bulk updates, etc.)</p>
         {/* Could be similar table to products but with focus on stock levels */}
         <div className="overflow-x-auto bg-white shadow rounded-lg mt-4">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SKU</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Stock</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Low Stock Threshold</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {products.map(p => (
                        <tr key={p.id} className={p.stock < 10 ? "bg-red-50" : ""}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{p.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{p.id.toUpperCase()}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{p.stock}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td> {/* Example threshold */}
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-indigo-600 hover:text-indigo-900">Update Stock</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );


  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow space-y-2 sticky top-24">
            {([
              { key: 'products', label: 'Products', icon: 'fa-cubes' },
              { key: 'orders', label: 'Orders', icon: 'fa-shopping-cart' },
              { key: 'inventory', label: 'Inventory', icon: 'fa-warehouse' },
              { key: 'banners', label: 'Banners', icon: 'fa-images' },
            ] as const).map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full text-left px-4 py-3 rounded-md flex items-center
                  ${activeTab === tab.key ? 'bg-amazon-yellow text-amazon-DEFAULT font-semibold' : 'hover:bg-gray-100 text-gray-700'}`}
              >
                <i className={`fas ${tab.icon} mr-3 w-5 text-center`}></i> {tab.label}
              </button>
            ))}
          </div>
        </aside>
        <main className="w-full md:w-3/4">
          {activeTab === 'products' && renderProductsTab()}
          {activeTab === 'orders' && renderOrdersTab()}
          {activeTab === 'banners' && renderBannersTab()}
          {activeTab === 'inventory' && renderInventoryTab()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboardPage;