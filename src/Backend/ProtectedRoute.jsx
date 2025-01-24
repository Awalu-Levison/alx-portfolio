/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from './localStorage';

const ProtectedRoute = ({ children }) => {
const user = getCurrentUser();
return user ? children : <Navigate to="/" />;
};



export default ProtectedRoute;
