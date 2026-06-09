import { Navigate } from "react-router-dom";
import { STORAGE_KEYS } from "../utils/storageKeys";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem(STORAGE_KEYS.IS_LOGGED_IN) === "true";

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
