import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleteModal, refetch, setDeleteModal }) => {
    const { name, email } = deleteModal;
    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Doctor removed')
                    setDeleteModal(null)
                    refetch()

                }
            })
    }
    return (
        <div>

            {/* 
            <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Ary you sure to delete {name}! </h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="delete-confirm-modal" class="btn btn-xs ">cancel</label>
                        <button onClick={() => handleDelete()} className="btn btn-xs btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;