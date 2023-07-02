import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const items = <>
        <li className='text-white font-bold'><Link to={'/'}>Home</Link></li>
        <li className='text-white font-bold'><Link to={'/products'}>products</Link></li>
        <li className='text-white font-bold'><Link to={'/myReview'}>My Reviews</Link></li>
        {
            user?.uid ? <>

            </> :
                null
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
        <div className="navbar bg-green-700 px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <Link className="text-3xl font-bold text-white">Food-Food</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <Link onClick={handelLogout} to={'/login'} className='btn btn-warning px-10'>Logout</Link> :
                        <Link to={'/login'} className='btn btn-warning px-10'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;