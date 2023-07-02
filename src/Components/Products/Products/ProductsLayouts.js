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
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
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