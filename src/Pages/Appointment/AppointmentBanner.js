import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import banner from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {
    const bannerBackground = {
        backgroundImage: `url(${banner})`

    };
    return (
        <div className="card lg:card-side bg-center bg-cover bg-base-100  shadow-xl" style={bannerBackground}>
            <div className="card-body mx-auto">
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                ></DayPicker>
            </div>
            <figure className='m-4'><img src={chair} alt="Album" /></figure>
        </div>
    );
};

export default AppointmentBanner;