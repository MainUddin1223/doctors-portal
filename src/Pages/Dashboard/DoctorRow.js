import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeleteModal }) => {
    const { name, specialty, img, email } = doctor;


    return (

        <tr>
            <th>{index + 1}</th>
            <th>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>

            </th>
            <th>{name}</th>
            <th>{specialty}</th>
            <th>
                <label onClick={() => setDeleteModal(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">
                    Delete
                </label></th>
        </tr>

    );
};

export default DoctorRow;