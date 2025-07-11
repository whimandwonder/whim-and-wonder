// pages/AccountPage.tsx - FULL AND COMPLETE

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../supabaseClient'; // Make sure this is imported
import { UserProfile, Address, Order as OrderType } from '../types';
import { FaUserCog, FaBoxOpen, FaHeart, FaSignOutAlt } from 'react-icons/fa';
import { ROUTE_PATHS } from '../constants';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'wishlist'>('profile');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth();
  
  const [profileForEdit, setProfileForEdit] = useState<UserProfile | null>(null);
  const [orders, setOrders] = useState<OrderType[]>([]); // State for real orders
  const [ordersLoading, setOrdersLoading] = useState(true); // Loading state for orders

  useEffect(() => {
    if (!loading && !user) {
      navigate(ROUTE_PATHS.LOGIN);
    }
    
    if (user) {
      setProfileForEdit({
        id: user.id,
        name: user.user_metadata?.full_name || 'New User',
        email: user.email || '',
        address: { street: '', city: '', state: '', zipCode: '', country: '' }
      });

      // --- NEW: Function to fetch user's orders ---
      const fetchOrders = async () => {
        setOrdersLoading(true);
        const { data, error } = await supabase
          .from('orders')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching orders:', error);
          // Set loading to false even if there's an error
          setOrdersLoading(false);
        } else if (data) {
          // You might need to cast the data if types don't match perfectly,
          // especially for jsonb columns.
          setOrders(data as any[]); 
          setOrdersLoading(false);
        }
      };

      fetchOrders();
    }
  }, [user, loading, navigate]);

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", profileForEdit);
    setIsEditingProfile(false);
    alert("Profile updated successfully! (This is a mock action for now)");
  };
  
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (profileForEdit) {
      if (['street', 'city', 'state', 'zipCode', 'country'].includes(name)) {
          setProfileForEdit(prev => ({ ...prev!, address: { ...prev!.address!, [name]: value } as Address }));
      } else {
          setProfileForEdit(prev => ({ ...prev!, [name]: value } as UserProfile));
      }
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate(ROUTE_PATHS.HOME);
  };

  if (loading || !user || !profileForEdit) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="text-xl text-gray-600">Loading Account...</div>
      </div>
    );
  }

  const sidebarTabs = [
    { key: 'profile', label: 'Profile Settings', icon: FaUserCog, action: () => setActiveTab('profile') },
    { key: 'orders', label: 'Order History', icon: FaBoxOpen, action: () => setActiveTab('orders') },
    { key: 'wishlist', label: 'My Wishlist', icon: FaHeart, action: () => setActiveTab('wishlist') },
    { key: 'logout', label: 'Logout', icon: FaSignOutAlt, action: handleLogout }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">Profile Settings</h3>
            {isEditingProfile ? (
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                 <div>
                  <label htmlFor="profileName" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" name="name" id="profileName" value={profileForEdit.name} onChange={handleProfileChange} className="mt-1 block w-full p-2 border rounded-md"/>
                </div>
                <div>
                  <label htmlFor="profileEmail" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" name="email" id="profileEmail" value={profileForEdit.email} className="mt-1 block w-full p-2 border rounded-md bg-gray-100" disabled/>
                </div>
                <h4 className="text-lg font-medium text-gray-700 pt-2">Shipping Address</h4>
                <div>
                  <label htmlFor="profileStreet" className="block text-sm font-medium text-gray-700">Street</label>
                  <input type="text" name="street" id="profileStreet" value={profileForEdit.address?.street || ''} onChange={handleProfileChange} className="mt-1 block w-full p-2 border rounded-md"/>
                </div>
                <div>
                  <label htmlFor="profileCity" className="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" name="city" id="profileCity" value={profileForEdit.address?.city || ''} onChange={handleProfileChange} className="mt-1 block w-full p-2 border rounded-md"/>
                </div>
                 <div>
                  <label htmlFor="profileState" className="block text-sm font-medium text-gray-700">State</label>
                  <input type="text" name="state" id="profileState" value={profileForEdit.address?.state || ''} onChange={handleProfileChange} className="mt-1 block w-full p-2 border rounded-md"/>
                </div>
                 <div>
                  <label htmlFor="profileZipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
                  <input type="text" name="zipCode" id="profileZipCode" value={profileForEdit.address?.zipCode || ''} onChange={handleProfileChange} className="mt-1 block w-full p-2 border rounded-md"/>
                </div>
                 <div>
                  <label htmlFor="profileCountry" className="block text-sm font-medium text-gray-700">Country</label>
                  <input type="text" name="country" id="profileCountry" value={profileForEdit.address?.country || ''} onChange={handleProfileChange} className="mt-1 block w-full p-2 border rounded-md"/>
                </div>
                <div className="flex space-x-3 pt-2">
                  <button type="submit" className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-md hover:opacity-90">Save Changes</button>
                  <button type="button" onClick={() => setIsEditingProfile(false)} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">Cancel</button>
                </div>
              </form>
            ) : (
              <div className="space-y-3">
                <p><strong>Name:</strong> {profileForEdit.name}</p>
                <p><strong>Email:</strong> {profileForEdit.email}</p>
                <h4 className="text-lg font-medium text-gray-700 pt-2">Default Shipping Address:</h4>
                {profileForEdit.address?.street ? (
                    <>
                        <p>{profileForEdit.address.street}</p>
                        <p>{profileForEdit.address.city}, {profileForEdit.address.state} {profileForEdit.address.zipCode}</p>
                        <p>{profileForEdit.address.country}</p>
                    </>
                ) : <p>No address on file. Please add one.</p>}
                <button onClick={() => setIsEditingProfile(true)} className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-500">Edit Profile</button>
              </div>
            )}
          </div>
        );
      case 'orders':
        if (ordersLoading) {
            return <div>Loading your orders...</div>;
        }
        return (
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Order History</h3>
            {orders.length > 0 ? (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div key={order.id} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                    <div className="flex justify-between items-center mb-2 flex-wrap">
                      <p className="font-bold">Order ID: <span className="font-normal">{order.order_id}</span></p>
                      <p className="text-sm text-gray-600">{new Date(order.created_at).toLocaleDateString()}</p>
                    </div>
                    {order.cart_items && (
                      <div className="mb-2">
                        <h4 className="font-semibold mt-2">Items:</h4>
                        <ul className="list-disc list-inside ml-4 text-sm">
                          {order.cart_items.map((item: any) => (
                             <li key={item.id}>{item.name} (x{item.quantity}) - ₹{item.price.toFixed(2)}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <p className="text-right font-bold text-lg mt-2">Total: ₹{order.total_amount.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p>You have no past orders.</p>
            )}
          </div>
        );
      case 'wishlist':
        return ( <div> <h3 className="text-2xl font-semibold text-gray-800 mb-4">My Wishlist</h3> <p>Your wishlist is empty.</p> </div> );
      default: return null;
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">My Account</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow space-y-2">
            {sidebarTabs.map(tab => {
              const isActive = activeTab === tab.key && tab.key !== 'logout';
              return (
                <button
                  key={tab.key}
                  onClick={tab.action}
                  className={`w-full text-left px-4 py-3 rounded-md flex items-center transition-colors duration-200
                    ${isActive ? 'bg-orange-500 text-white font-semibold' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  <tab.icon className="mr-3 w-5 text-center" /> {tab.label}
                </button>
              );
            })}
          </div>
        </aside>

        <main className="w-full md:w-3/4 bg-white p-6 rounded-lg shadow">
          {renderTabContent()}
        </main>
      </div>
    </div>
  );
};

export default AccountPage;