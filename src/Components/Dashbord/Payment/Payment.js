import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChecoutForm from '../ChecoutForm/ChecoutForm';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {

    const data = useLoaderData();

    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

    return (
        <div>
            <h1 className='text-white font-bold text-4xl mt-6'>Product Name : {data.name} </h1>
            <h1 className='text-white font-bold text-xl mt-6'>If you want to buy this product from us then pay : {data.price}$</h1>

            <div className='w-96 mx-auto mt-16 border-2 border-yellow-500 p-10 rounded-lg'>
                <Elements stripe={stripePromise}>
                    <ChecoutForm data={data}/>
                </Elements>
            </div>

        </div>

    );
};

export default Payment;