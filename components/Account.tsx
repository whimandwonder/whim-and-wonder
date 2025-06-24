import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import our "Brain"
import { supabase } from '../supabaseClient'; // Import supabase for logout

const Account = () => {
  // Ask the brain for the user's information
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/'); // After logging out, send them to the home page
  };

  // The main part of the page is now inside this component
  const AccountPageContent = () => {
    // ---- IF A USER IS LOGGED IN ----
    if (user) {
      return (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Welcome Back!
          </h2>
          <p className="mt-2 text-gray-600">
            You are logged in as: <strong className="text-indigo-600">{user.email}</strong>
          </p>
          <div className="mt-8">
            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Log Out
            </button>
          </div>
        </div>
      );
    }

    // ---- IF NO USER IS LOGGED IN ----
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          My Account
        </h2>
        <p className="mt-2 text-gray-600">
          Sign in to your account or create a new one.
        </p>
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            to="/login"
            className="w-full px-4 py-3 font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="w-full px-4 py-3 font-semibold text-indigo-700 bg-indigo-100 rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Account
          </Link>
        </div>
      </div>
    );
  };

  // This is the outer shell of the page
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <AccountPageContent />
      </div>
    </div>
  );
};

export default Account;