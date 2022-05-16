import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AbvailableAppointment from './AbvailableAppointment';
import AppointmentBanner from './AppointmentBanner';


const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AbvailableAppointment date={date}></AbvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;