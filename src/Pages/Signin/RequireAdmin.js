import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Spinner from '../Shared/Spinner';

const RequireAdmin = ({ children }) => {
    const location = useLocation()
    const [user, loading, error] = useAuthState(auth);
    const [admin,adminLoading] = useAdmin(user)
    if (loading||adminLoading) {
        return <Spinner></Spinner>
    }
    if (!user||!admin) {
        signOut(auth)
        return <Navigate to='/signin' state={{ from: location }} replace></Navigate>
    }
    return (
        children
    );
};

export default RequireAdmin;