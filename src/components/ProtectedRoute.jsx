import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");

  if (!token) {
    // Redirect ke login jika belum mempunyai token
    return <Navigate to="/login" />;
  }
  return childre;
};
