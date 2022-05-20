import React from 'react';
import { toast } from 'react-toastify';

const UsarTable = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://guarded-shore-68271.herokuapp.com/user/admin/${email}`, {
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
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Successfully made an admin')
                }
            })
        refetch()
    }

    return (
        <tr className="hover">
            <th>1</th>
            <th>{user._id}</th>
            <td>{user.email}</td>
            <td>{
                role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">make admin</button> : <button disabled className="btn btn-xs">Admin</button>
            }</td>
            <td>{
                role !== 'admin' ? <button className="btn btn-xs" disabled>remove admin</button> : <button className="btn btn-xs">remove admin</button>
            }</td>
        </tr>
    );
};

export default UsarTable;