import React from 'react';
import { toast } from 'react-toastify';

const UsarTable = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    return toast.error(`You can't make an admin`)
                }
                return res => res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin')
                }
            })
    }

    return (
        <tr className="hover">
            <th>1</th>
            <th>{user._id}</th>
            <td>{user.email}</td>
            <td>{
                role !== 'admin' ? <button onClick={makeAdmin} class="btn btn-xs">make admin</button> : <button disabled class="btn btn-xs">Admin</button>
            }</td>
            <td>{
                role !== 'admin' ? <button class="btn btn-xs" disabled>remove admin</button> : <button class="btn btn-xs">remove admin</button>
            }</td>
        </tr>
    );
};

export default UsarTable;