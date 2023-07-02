import React from 'react';
import { useQuery } from 'react-query';
import SingelProduct from './SingelProduct';
import { Link } from 'react-router-dom';

const Products = () => {

    const {data : product=[]} = useQuery({
        queryKey : ['product'],
        queryFn : async()=>{
            const res = await fetch('http://localhost:5000/product');
            const data =await res.json();
            return data;
        }
    })

    return (
        <div className='my-28'>
            <h1 className='font-bold text-5xl text-white'>All our delicious dishes</h1>
            <p className='mt-9 text-white'>We know what you want from us. So we have brought good products for you. <br /> So that you take it once, come to take it from us again. <br /> All our services are very good</p>
            <div className='grid grid-cols-3 w-11/12 mx-auto mt-28 gap-7'>
                {
                    product.map(items => <SingelProduct key={items._id} items={items}></SingelProduct>)
                }
            </div>
            <Link to={'/products'} className='btn btn-warning w-96 mx-auto mt-11'>More Products</Link>
        </div>
    );
};

export default Products;