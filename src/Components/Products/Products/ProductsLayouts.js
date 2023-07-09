import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';

const ProductsLayouts = () => {
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

                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-40 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to={'/products'} className='font-bold text-white'>Food Products</Link></li>
                        <li><Link to={'/products/drinkProducts'} className='font-bold text-white'>Drink Products</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default ProductsLayouts;