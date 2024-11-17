import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

function Logout({ setIsAuthenticated }) {
  useEffect(() => {
    // Set authentication to false only once when the component mounts
    setIsAuthenticated(false);
  }, [setIsAuthenticated]);

  // Redirect to the /admin route after logout
  return <Navigate to="/about" replace />;
}

export default Logout;
