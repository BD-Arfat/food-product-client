import React from 'react';
import image1 from '../../../../image/time.png'
import image2 from '../../../../image/location.png'
import image3 from '../../../../image/contact.png'

const Service = () => {
    return (
        <div className='md:flex justify-around items-center bg-black mt-36 mb-28 p-14 md:mx-28 rounded-xl'>
            <div className='flex items-center mt-4 mb-7'>
                <img src={image1} className='w-10 h-10' alt="" />
                <div className=' text-justify ms-4'>
                <h1 className='text-white font-bold text-lg'>We are open monday-friday</h1>
                <h1 className='font-bold'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex items-center mt-7 mb-7'>
                <img src={image3} className='w-10 h-10' alt="" />
                <div className=' text-justify ms-4'>
                <h1 className='text-white font-bold text-lg'>Have a question?</h1>
                <h1 className='font-bold'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex items-center mt-7 mb-5'>
                <img src={image2} className='w-10 h-10' alt="" />
                <div className=' text-justify ms-4'>
                <h1 className='text-white font-bold text-lg'>Need a repair? our address</h1>
                <h1 className='font-bold'>Bangladesh, Chottogram</h1>
                </div>
            </div>
        </div>
    );
};

export default Service;