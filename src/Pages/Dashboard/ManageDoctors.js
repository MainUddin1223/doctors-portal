import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
    const [deleteModal, setDeleteModal] = useState(null)
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <h1>This is manage {doctors?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) =>
                                <DoctorRow
                                    key={doctor._id}
                                    doctor={doctor}
                                    index={index}
                                    refetch={refetch}
                                    setDeleteModal={setDeleteModal}
                                ></DoctorRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteModal && <DeleteConfirmModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} refetch={refetch}></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctors;