import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'; // We need to go up two folders to find the context

const ProtectedRoute = () => {
  const { user, loading } = useAuth(); // Ask the brain: "Is there a user?"

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />; // If NO user, redirect to login
  }

  return <Outlet />; // If there IS a user, show the page they wanted (e.g., the CartPage)
};

export default ProtectedRoute;