import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth()
    if (loading) {
        return <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-50">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>

                {/* Loading Text */}
                <p className="mt-4 text-indigo-600 font-semibold text-lg tracking-wide animate-pulse">
                    Logging in...
                </p>
            </div>
        </div>

    }
    if (!user) {
        <Navigate to="/login"> </Navigate>
    }
    return children
};

export default PrivateRoute;