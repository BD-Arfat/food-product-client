import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import FoodProduct from './FoodProduct';
const FoodProducts = () => {
    const {data : product=[]} = useQuery({
        queryKey : ['product'],
        queryFn : async()=>{
            const res = await fetch('http://localhost:5000/products',{
                headers : {
                    authoriZation : `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data =await res.json();
            return data;
        }
    })

    return (
        <div className='mt-10'>
            <h1 className='font-bold text-4xl text-white'>We have all kinds of food products here</h1>
            <div className='grid grid-cols-3 gap-4 mt-10'>
                {
                    product.map(items => <FoodProduct key={items._id} items={items}></FoodProduct>)
                }
            </div>
        </div>
    );
};

export default FoodProducts;