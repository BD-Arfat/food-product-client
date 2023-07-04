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
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
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