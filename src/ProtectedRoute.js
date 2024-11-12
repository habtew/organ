import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase'; // Assuming you have a custom hook or Firebase context to access auth statused

function ProtectedRoute({ children }) {
  const user = auth.currentUser;

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
