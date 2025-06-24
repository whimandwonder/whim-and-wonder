// types.ts

export interface Product {
  id: string;
  name: string; // This will now hold the LONG title
  description: string; // This will hold the SHORT summary for product cards
  originalPrice?: number;
  price: number;
  // --- NEW FIELD FOR RICH DESCRIPTION ---
  productDetails?: { heading: string; points: string[] }[];
  category: string;
  subcategory?: string;
  tags?: string[];
  imageUrl: string;
  rating: number;
  reviews: number;
  stock: number;
  slug: string;
  isNew?: boolean;
  isTopSeller?: boolean;
  isTrending?: boolean;
  isFeatured?: boolean;
  features?: string[];
  faqs?: { question: string; answer: string }[];
  images?: string[];
  reviewsData?: {
    id: string;
    author: string;
    rating: number;
    comment: string;
  }[];
}

// The rest of your types are perfect and remain unchanged
export interface Category { id: string; name: string; imageUrl: string; slug: string; }
export interface Testimonial { id: string; name: string; quote: string; imageUrl: string; rating: number; }
export interface CartItem extends Product { quantity: number; }
export interface Order { id:string; items: CartItem[]; totalAmount: number; customerInfo: any; shippingAddress: any; paymentMethod: string; status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'; orderDate: Date; estimatedDelivery: Date; }
export interface CustomerInfo { name: string; email: string; phone: string; }
export interface Address { street: string; city: string; state: string; zipCode: string; country: string; }
export interface UserProfile { id: string; name: string; email: string; address?: Address; }