import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={{ from: location }} replace to="/login"></Navigate>;
};

export default AdminPrivateRoutes;
