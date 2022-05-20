import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../Shared/Spinner';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))

    const imageStorageKey = 'e16cabbd91c7331aa91630179a82997b';



    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const image = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: image
                    }
                    ///send to your database
                    fetch('http://localhost:5000/doctor', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully')
                                reset()
                            }
                            else {
                                toast.error('failed to add the doctor')
                                reset()
                            }
                        })

                }
            })

    }



    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h1 className='text-2xl text-purple-400'>Add a Doctor</h1>
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
                        {errors.name?.type === 'required' && <span className='block text-lg label-text-alt text-red-500'>{errors.name.message}</span>}
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
                        {errors.email?.type === 'required' && <span className='block text-lg label-text-alt text-red-500'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-lg label-text-alt text-red-500'>{errors.email.message}</span>}
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Specialization</span>
                        </label>

                        <select {...register("specialty")} className="select  input-bordered w-full max-w-xl ">
                            {
                                services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)
                            }
                        </select>
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-xl">Photo</span>
                        </label>
                        <input type='file'
                            className='input input-bordered w-full max-w-xl' {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is required'
                                }
                            })} />
                        {errors.name?.type === 'required' && <span className='block text-lg label-text-alt text-red-500'>{errors.image.message}</span>}
                    </div>

                    <input type="submit" value='Add a Doctor' className="input bg-accent text-lg my-4 text-white w-full max-w-xl" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;