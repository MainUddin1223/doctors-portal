import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner';

const RequireAuth = ({ children }) => {
    const location = useLocation()
    const [user, loading, error] = useAuthState(auth);
    if(loading){
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to='/signin' state={{from:location} } replace></Navigate>
    }
    return (
      children
    );
};

export default RequireAuth;