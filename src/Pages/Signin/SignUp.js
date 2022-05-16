import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Social from '../Shared/Social';
import { useForm } from "react-hook-form";
import Spinner from '../Shared/Spinner';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate()
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
     
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const onSubmit = async data => {  
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name });
    }
    const [token]=useToken(user)
    if (loading || updating) {
        return <Spinner></Spinner>
    }
    if (token) {
        navigate('/appointment')
    }
    if (error || updateError) {
        return <p>{error?.message || updateError?.message}</p>
    }
    return (
        <div className='p-4'>
            <div className="card w-full max-w-xl  bg-base-100 shadow-xl mx-auto my-16">
                <h1 className='text-center text-2xl my-4'>Sign Up</h1>
                <div className="card-body">




                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <input className='input input-bordered w-full max-w-xl' {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })} />
                            {errors.email?.type === 'required' && <span className='text-lg label-text-alt text-red-500'>{errors.email.message}</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input className='input input-bordered w-full max-w-xl' {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                            {errors.email?.type === 'required' && <span className='text-lg label-text-alt text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='text-lg label-text-alt text-red-500'>{errors.email.message}</span>}
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
                            {errors.password?.type === 'required' && <span className='text-lg label-text-alt text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className=' text-xl label-text-alt text-red-500'>{errors.password.message}</span>}
                        </div>
                        <input type="submit" value='Sign Up' className="input bg-accent text-lg my-4 text-white w-full max-w-xl" />
                    </form>
                    <p className='text-center'>Already have an account??<Link to='/signin'><span className='px-2 text-primary'>Login Now</span></Link></p>
                    <div className="divider">OR</div>
                    <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default SignUp;