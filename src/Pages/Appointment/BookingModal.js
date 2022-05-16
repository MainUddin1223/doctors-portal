import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const [user] = useAuthState(auth)
    const formatedDate = format(date, 'PP');
    const { name, slots, _id } = treatment;
    const [slotItem, setSlotItem] = useState(slots)
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const name = event.target.name.value;
        const number = event.target.phone.value;
        const email = event.target.email.value;
        const data = {
            treatmentId: _id,
            treatment: treatment.name,
            slot,
            patient: name,
            number,
            email,
            date: formatedDate
        };
        const url = `http://localhost:5000/appointment`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Appointment Booked on ${formatedDate} at ${slot}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                else {
                    toast.error(`You have an appointment already on ${data.exists?.date} at ${data.exists?.slot}`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }


            })
        setTreatment(null);
        refetch()

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h1 className='text-xl py-2 text-secondary font-bolder'>Booking for {name}</h1>
                    <label htmlFor='booking-modal' className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                        <input type="text" value={formatedDate} className="input input-bordered w-full max-w-xl my-2" disabled />
                        <select name='slot' className='select select-bordered w-full max-w-xl my-2' id="">
                            {
                                slotItem.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" value={user?.displayName} className="input input-bordered w-full max-w-xl my-2" required disabled />
                        <input type="email" name="email" value={user?.email} className="input input-bordered w-full max-w-xl my-2" disabled />
                        <input type="number" name="phone" placeholder="Contact Number" className="input input-bordered w-full max-w-xl my-2" required />
                        <input type="submit" value="Submit" className="input bg-accent text-xl text-white input-bordered w-full max-w-xl my-2" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;