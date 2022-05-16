import React from 'react';
import treatment from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
import Service from './Service';
import dental from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Services = () => {
    return (
        <div className=''>
            <h2 className='uppercase text-center text-primary text-2xl my-8'>Our services</h2>
            <h3 className='text-center text-4xl my-8'>Service We Provide</h3>
            <div className='grid grid-cols-1  gap-4 mx-4 lg:grid-cols-3  '>
                <Service img={treatment} searviceHeading={'Fluoride Treatment'} searviceDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, reiciendis?'}></Service>
                <Service img={cavity} searviceHeading={'Cavity Filling '} searviceDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, reiciendis?'}></Service>
                <Service img={teeth} searviceHeading={'Teeth Whitening'} searviceDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, reiciendis?'}></Service>
            </div>

            <div className="card lg:card-side bg-base-100 shadow-xl w-4/5 md:w-8/10 lg:w-3/5 m-auto mt-40">
                <img className='max-w-sm m-auto h-auto shadow-lg' src={dental} />
                <div className="card-body m-2">
                    <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                    <p className='my-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions mt-0">
                        <PrimaryButton>GET STARTED</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;