import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import UsarTable from './UsarTable';

const AllUsers = () => {
    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:5000/users')
    //         .then(res => res.json())
    //         .then(data => setUsers(data))
    // }, [users])
    // .then(res => {
    //     if (res.status === 403) {
    //         return toast.error(`You can't make an admin`)
    //     }
    //     return res => res.json()
    // })
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))
    if (isLoading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>User Id</th>
                            <th>Email</th>
                            <th>Give Role</th>
                            <th>Remove Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(
                                (user) => <UsarTable key={user._id} user={user}
                                    refetch={refetch}></UsarTable>

                            )

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;