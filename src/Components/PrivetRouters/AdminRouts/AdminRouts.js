import React, { useContext } from 'react';
import { AuthContext } from '.././../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../../Hooks/UseAdmin';

const AdminRouts = ({ children }) => {
    const { user, loding } = useContext
        (AuthContext)
    const location = useLocation()
    const [isAdmin, isAdminLoding] = useAdmin(user?.email)
    if (user && isAdmin) {
        return children;
    };
    if (loding || isAdminLoding) {
        return <button className="btn">
            <span className="loading loading-spinner"></span>
            loading
        </button>
    }
    return (
        <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    );
};

export default AdminRouts;