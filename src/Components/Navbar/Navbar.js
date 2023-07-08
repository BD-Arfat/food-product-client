import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../../Hooks/UseAdmin';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)

    const items = <>
        <li className='text-white font-bold'><Link to={'/'}>Home</Link></li>
        <li className='text-white font-bold'><Link to={'/about'}>Abouts</Link></li>
        <li className='text-white font-bold'><Link to={'/products'}>products</Link></li>

        {
            user?.uid ? <>
                <li className='text-white font-bold'><Link to={'/myReview'}>My Reviews</Link></li>
                <li className='text-white font-bold'><Link to={'/myOrder'}>My Orders</Link></li>

            </> :
                null
        }
        {
            isAdmin &&
            <>
                <li className='text-white font-bold'><Link to={'/dashbord'}>Dashbord</Link></li>
            </>

        }
    </>

    const handelLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="navbar bg-green-700 lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <Link className="text-xl lg:3xl font-bold text-white">Foodie-Crush</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <Link onClick={handelLogout} to={'/login'} className='btn btn-sm btn-success px-7 md:btn-warning md:btn-md md:px-14'>Logout</Link> :
                        <Link to={'/login'} className='btn btn-sm btn-success px-7 md:btn-warning md:btn-md md:px-14'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;