import React from 'react';
import { Link } from 'react-router-dom';

const SingelProduct = ({items}) => {
    const {name, image, description, price, rating, _id} =items
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl border-2 border-white">
            <figure><img src={image} alt="Shoes" className='w-full h-[350px]'/></figure>
            <div className="card-body text-dark">
                <h2 className="card-title">Name : {name}</h2>
                <div className='flex justify-between items-center'>
                <p className=' text-left text-lg font-bold text-green-300'>Price : {price}$</p>
                <p className=' text-left text-lg font-bold text-green-300'>Rating : {rating}</p>
                </div>
                <p className=' text-left mt-3'>
                    Description : {description}
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/products/${_id}`} className="btn btn-warning px-11 mt-4 w-full">Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default SingelProduct;