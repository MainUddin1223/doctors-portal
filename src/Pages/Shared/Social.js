import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import Spinner from './Spinner';


const Social = () => {
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);
    const handleGoogleLogin = event => {
        event.preventDefault();
        signInWithGoogle()
    }
    const [token]=useToken(googleUser)
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || '/';
    useEffect(() => {
        if (googleUser) {
            return navigate(from, { replace: true })
        }

    }, [googleUser])

    return (
        <button className='input input-bordered text-xl' onClick={handleGoogleLogin}>Continue With Google</button>
    );
};

export default Social;