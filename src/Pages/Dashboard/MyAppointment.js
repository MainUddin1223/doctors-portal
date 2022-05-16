import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth)
    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/appointment?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointments(data))
        }

    }, [user])

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 2 --> */}
                        {
                            appointments.map(
                                (appointment, index) =>
                                    <tr class="hover" key={index}>
                                        <th>{index + 1}</th>
                                        <th>{appointment.patient}</th>
                                        <td>{appointment.date}</td>
                                        <td>{appointment.slot}</td>
                                        <td>{appointment.treatment}</td>
                                    </tr>
                            )

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;