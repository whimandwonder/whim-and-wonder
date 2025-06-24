import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants';
import { supabase } from '../supabaseClient'; // --- CHANGE 1: Import Supabase client ---

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // --- CHANGE 2: Add loading state ---
  const navigate = useNavigate();

  // --- CHANGE 3: Replace mock logic with real Supabase sign-up ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        // You can store extra data like the user's name here
        data: {
          full_name: name,
        }
      }
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      // IMPORTANT: By default, Supabase requires email confirmation.
      alert('Registration successful! Please check your email to confirm your account.');
      navigate(ROUTE_PATHS.LOGIN);
    }
  };

  // Your existing JSX layout is UNTOUCHED below this line.
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to={ROUTE_PATHS.LOGIN} className="font-medium text-amazon-link hover:text-amazon-yellow">
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="rounded-md shadow-sm space-y-3">
             <div>
              <label htmlFor="name_register" className="sr-only">Full Name</label>
              <input id="name_register" name="name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amazon-yellow focus:border-amazon-yellow sm:text-sm" placeholder="Full Name"/>
            </div>
            <div>
              <label htmlFor="email-address_register" className="sr-only">Email address</label>
              <input id="email-address_register" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amazon-yellow focus:border-amazon-yellow sm:text-sm" placeholder="Email address"/>
            </div>
            <div>
              <label htmlFor="password_register" className="sr-only">Password</label>
              <input id="password_register" name="password" type="password" autoComplete="new-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amazon-yellow focus:border-amazon-yellow sm:text-sm" placeholder="Password"/>
            </div>
             <div>
              <label htmlFor="confirm-password_register" className="sr-only">Confirm Password</label>
              <input id="confirm-password_register" name="confirmPassword" type="password" autoComplete="new-password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amazon-yellow focus:border-amazon-yellow sm:text-sm" placeholder="Confirm Password"/>
            </div>
          </div>

          <div>
            {/* The button is now disabled while loading */}
            <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amazon-blue hover:bg-amazon-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazon-yellow disabled:opacity-60">
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;