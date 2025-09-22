import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
 
  const isAuthenticated = sessionStorage.getItem("jwtToken");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
