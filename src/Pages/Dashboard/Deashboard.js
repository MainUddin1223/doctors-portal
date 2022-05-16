import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Deashboard = () => {
    return (
        <div>
           
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                <h1 className='text-3xl text-purple-400 font-bold'>This is dashboard</h1>
            <Outlet></Outlet>
                    {/* <!-- Page content here --> */}
                  

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard'>My Appointment</Link></li>
                        <li><Link to='/dashboard/review'>Review</Link></li>
                        <li><Link to='/dashboard/history'>History</Link></li>
                    </ul>

                </div>
            </div>

            
           
        </div>
    );
};

export default Deashboard;