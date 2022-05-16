import React from 'react';
import contact from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const Contact = () => {
    return (
        <div style={{ backgroundImage: `url(${contact})` }} className="text-center m-auto my-24 py-16">
            <h1 className='text-primary text-xl font-bold mt-8 p-4'  >Contact Us</h1>
            <h2 className='text-white text-4xl mt-4'>Stay connected with us</h2>
            <div className='md:w-auto  items-center flex flex-col'>
                <input type="text" placeholder="Email Address" className="input my-2  w-full max-w-xs sm:max-w-xl" />
                <input type="text" placeholder="Subject" className="input  my-2 w-full max-w-xs  sm:max-w-xl" />
                <textarea className="textarea my-2 w-full max-w-xs  sm:max-w-xl" placeholder="Your message"></textarea>
            </div>
            <PrimaryButton>Submit</PrimaryButton>
        </div>
    );
};

export default Contact;