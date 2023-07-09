import React from 'react';
import { useQuery } from 'react-query';
import SingelProduct from './SingelProduct';
import { Link } from 'react-router-dom';

const Products = () => {

    const {data : product=[]} = useQuery({
        queryKey : ['product'],
        queryFn : async()=>{
            const res = await fetch('https://food-products-server.vercel.app/Limitproduct');
            const data =await res.json();
            return data;
        }
    })

    return (
        <div className='md:my-28'>
            <h1 className='font-bold text-3xl md:text-5xl text-dark'>All our delicious dishes</h1>
            <p className='mt-9 text-dark'>We know what you want from us. So we have brought good products for you. <br /> So that you take it once, come to take it from us again. <br /> All our services are very good</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto mt-28 gap-7'>
                {
                    product.map(items => <SingelProduct key={items._id} items={items}></SingelProduct>)
                }
            </div>
            <Link to={'/products'} className='btn btn-warning md:w-96 mx-auto mt-11'>More Products</Link>
        </div>
    );
};

export default Products;