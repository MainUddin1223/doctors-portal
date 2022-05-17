import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Shared/Social';
import { useForm } from "react-hook-form";
import Spinner from '../Shared/Spinner';
import useToken from '../../Hooks/useToken';

const Signin = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const onSubmit = data => {
        const email = data.email;
        const password = data.password
        signInWithEmailAndPassword(email, password)
    };
    const location = useLocation()
    const navigate = useNavigate()
    const [token]=useToken(user)
    let from = location.state?.from?.pathname || '/';
    useEffect(() => {

        if (token) {
            return navigate(from, { replace: true })
        }
    }, [token,navigate,from])
    if (loading) {
        return <Spinner></Spinner>
    }
    let errorMessage;
    if (error) {
        errorMessage = error.message;
    }

    return (
        <div className='p-4'>
            <div className="card w-full max-w-xl  bg-base-100 shadow-xl mx-auto my-16">
                <h1 className='text-center text-2xl my-4'>Login</h1>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xl" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xl" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 tharactar'
                                }
                            })} />
                            {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        </div>
                        <p className='text-red-600 text-center text-xl '>{errorMessage}</p>
                        <input type="submit" value='Login' className="input bg-accent text-xl my-4 text-white w-full max-w-xl" />

                    </form>
                    {/* end */}
                    <p className='text-center'>New to Doctors Portal??<Link to="/signup"><span className='px-2 text-primary'>Create new account</span></Link></p>
                    <div className="divider">OR</div>
                    <Social></Social>
                </div>
            </div>
        </div>

    );
};

export default Signin;