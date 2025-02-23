import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const { User } = UserAuth();

    if (!User) {
        return <Navigate to="/" />
    }
    return children
}

export default ProtectedRoute