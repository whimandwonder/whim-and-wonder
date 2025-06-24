import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../constants';
import { supabase } from '../supabaseClient'; // --- CHANGE 1: Import Supabase client ---

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // --- CHANGE 2: Add loading state ---
  const navigate = useNavigate();

  // --- CHANGE 3: Replace mock logic with real Supabase login ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      // Successful login, AuthContext will handle the state change.
      // Redirect to the account page.
      navigate(ROUTE_PATHS.ACCOUNT);
    }
  };

  // Your existing JSX layout is UNTOUCHED below this line.
  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to={ROUTE_PATHS.REGISTER} className="font-medium text-amazon-link hover:text-amazon-yellow">
              create a new account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-amazon-yellow focus:border-amazon-yellow focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password_login" className="sr-only">Password</label>
              <input id="password_login" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-amazon-yellow focus:border-amazon-yellow focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-amazon-yellow focus:ring-amazon-yellow border-gray-300 rounded"/>
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-amazon-link hover:text-amazon-yellow">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            {/* The button is now disabled while loading */}
            <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amazon-blue hover:bg-amazon-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amazon-yellow disabled:opacity-60">
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;