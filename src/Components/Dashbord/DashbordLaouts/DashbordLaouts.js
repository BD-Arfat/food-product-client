import React, { useContext } from 'react';
import Navbar from '../../Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../../Hooks/UseAdmin';
import { AuthContext } from '../../Context/AuthProvider';

const DashbordLaouts = () => {
    // const {user} = useContext(AuthContext)
    // const [isAdmin] = useAdmin(user?.email);

    return (
        <div>
            <Navbar />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-20 ms-56 md:ms-[720px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                        <Outlet/>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-36 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to={'/dashbord'} className='text-white font-bold'>All User</Link></li>
                        <li><Link to={'/dashbord/addProduct'} className='text-white font-bold'>Add Product</Link></li>
                        <li><Link to={'/dashbord/yourProduct'} className='text-white font-bold'>Your Product</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLaouts;