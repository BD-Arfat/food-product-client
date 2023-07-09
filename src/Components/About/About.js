import React from 'react';
import image from '../../image/lovly-imoji.gif'

const About = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-10'>
                <h1 className='font-bold text-white text-2xl md:text-4xl'>How you can use this beautiful website of ours</h1>
                <img src={image} className='w-10 md:ms-3' alt="" />
            </div>
                <div className='mt-16  mb-14'>
                    <div className=' text-justify bg-green-800 p-4 md:p-10 mx-5 md:mx-25 rounded-lg'>
                        <h1 className='md:text-white text-error font-bold text-2xl md:text-3xl'>1) What is in the header on this website?</h1>
                        <p className='text-white mt-3 md:font-bold'>We have 7 options in the header of this website. They are: Home, Abouts, Products (Food Product and Drink Product), My Review, My Orders, Dashboard (All Users, Add Product, Your Product). This is the header of our website</p>
                    </div>
                    <div className=' text-justify bg-green-800 p-4 md:p-10 mx-5  rounded-lg mt-5'>
                        <h1 className='md:text-white text-error font-bold text-2xl md:text-3xl'>2) Some of the rules of this website are legal</h1>
                        <p className='text-white mt-3 md:font-bold'>Everyone can enter our website. But everyone must register first. Otherwise, he can see the user's home page, abouts pages, products pages. And the rest of the pages will not be able to see. You have to register with your email on our website. Cannot be registered twice with one email</p>
                    </div>
                    <div className=' text-justify bg-green-800 p-4 md:p-10 mx-5  rounded-lg mt-5'>
                        <h1 className='md:text-white text-error font-bold text-2xl md:text-3xl'>3) Who will control this website?</h1>
                        <p className='text-white mt-3 md:font-bold'>Our website manager will control it. Everything about the manager. You can delete everyone's products if you want. Manager can make all users as sellers. And those whom he will make sellers. You can sell products on our website. . You cannot sell any products from our website unless you have been made a manager seller. Only products that can be purchased. You don't have to take anyone's permission to buy the product</p>
                    </div>
                </div>
        </div>
    );
};

export default About;