import React from 'react';
import image1 from '../../../../image/time.png'
import image2 from '../../../../image/location.png'
import image3 from '../../../../image/contact.png'

const Service = () => {
    return (
        <div className='flex justify-around items-center bg-black mt-36 mb-28 p-14 mx-28 rounded-xl'>
            <div className='flex'>
                <img src={image1} alt="" />
                <div className=' text-justify ms-4'>
                <h1 className='text-white font-bold text-lg'>We are open monday-friday</h1>
                <h1 className='font-bold'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex'>
                <img src={image3} alt="" />
                <div className=' text-justify ms-4'>
                <h1 className='text-white font-bold text-lg'>Have a question?</h1>
                <h1 className='font-bold'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex'>
                <img src={image2} alt="" />
                <div className=' text-justify ms-4'>
                <h1 className='text-white font-bold text-lg'>Need a repair? our address</h1>
                <h1 className='font-bold'>Bangladesh, Chottogram</h1>
                </div>
            </div>
        </div>
    );
};

export default Service;