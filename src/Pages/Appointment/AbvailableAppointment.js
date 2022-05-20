import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Services from './Services';
import Spinner from '../Shared/Spinner'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const AbvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const navigate = useNavigate()
    const formatedDate = format(date, 'PP');
    console.log(formatedDate);
    const url = `https://guarded-shore-68271.herokuapp.com/available?date=${formatedDate}`
    const { isLoading, data: services, error, refetch } = useQuery(['available', formatedDate], () =>

        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(services.message);
    if (services.message) {
        signOut(auth)
        localStorage.removeItem('accessToken')
        navigate('/signin')
    }
    return (
        <div className='my-8'>
            <h4 className='text-xl text-secondary font-bold text-center my-16'>Available Appointment Date {format(date, 'PP')}.</h4>;

            <div className='grid  grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3  '>
                {
                    services?.map(service => <Services key={service._id} service={service} setTreatment={setTreatment}></Services>)
                }
            </div>
            {
                treatment && <BookingModal
                    key={treatment._id}
                    treatment={treatment}
                    date={date}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AbvailableAppointment;