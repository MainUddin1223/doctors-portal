import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';



const MakeAppointment = () => {
    return (
        <section style={ 
            { background: `url(${appointment})` }}
            className='flex justify-center items-center mt-32 max-h-[550px]' >
            <div className='flex-1 justify-center hidden lg:block'>
                <img className='mt-[-100px] max-h-[550px] m-auto' src={doctor} alt="" />
            </div>
            <div className='flex-1 '>
                <div className="p-8">
                <h1 className='text-4xl font-bold py-3 text-primary'>Appointment</h1>
                <h2 className='text-3xl text-white'>Make an appointment</h2>
                <p className='text-white text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ab nam consequuntur in, odit fuga ducimus, debitis aliquam nobis, id nisi optio facere labore earum reiciendis iusto corporis rerum error dolorum harum sint deleniti quibusdam architecto reprehenderit? Repudiandae, natus consequatur.</p>
               <div className="my-4">
               <PrimaryButton>GET STARTED</PrimaryButton>
               </div>
                </div>
            </div>
        </section >
    );
};

export default MakeAppointment;