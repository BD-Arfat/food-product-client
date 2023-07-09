import React from 'react';
import image1 from '../../../../image/bannar-4 (1).png'
import image2 from '../../../../image/bannar-4 (2).png'
import image3 from '../../../../image/bannar-4 (3).png'
import image4 from '../../../../image/bannar-4 (4).png'
import image5 from '../../../../image/all-drink.png'


const Carasoul = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" draggable='true' className="carousel-item relative w-full text-justify md:-mt-0 -mt-[1px]">

                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={image1} className="md:md:w-[500px] w-[280px]" alt='' />
                        <div className='md:w-1/2 text-dark'>
                            <h1 className="md:text-5xl text-2xl font-bold">We have special burgers</h1>
                            <p className="py-6 md:pr-14">We have special burgers, you can buy these products from us. We have used the best products to make this dish. Number two, don't use anything that will spoil your fitness. We have many customers because our food is good. They are ordering food from this website and taking it to their homes every day</p>
                            <button className="btn  btn-warning px-20">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className=" absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-1/4">
                    <a href="#slide5" className="btn btn-circle btn-sm md:btn-md text-dark bg-amber-500 hover:bg-orange-600">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-sm md:btn-md text-dark bg-amber-500 hover:bg-orange-600">❯</a>
                </div>
            </div>

            <div id="slide2" draggable='true' className="carousel-item relative w-full text-justify lg:mt-12  md:-mt-0 -mt-[1px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image2} className="md:w-[500px] w-[280px]" alt='' />
                    <div className='md:w-1/2 md:px-7 text-dark'>
                        <h1 className="md:text-5xl text-2xl font-bold">We have special Mutton Birani</h1>
                        <p className="py-6 md:pr-14">We have special Mutton Birani, you can buy these products from us. We have used the best products to make this dish. Number two, don't use anything that will spoil your fitness. We have many customers because our food is good. They are ordering food from this website and taking it to their homes every day.</p>
                        <button className="btn btn-warning px-20">Order Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-1/4">
                    <a href="#slide1" className="btn btn-circle btn-sm md:btn-md text-dark bg-amber-500 hover:bg-orange-600">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-sm md:btn-md text-dark bg-amber-500 hover:bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide3" draggable='true' className="carousel-item relative w-full text-justify lg:mt-12 md:-mt-0 -mt-[1px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image3} className="md:w-[500px] w-[280px]" alt='' />
                    <div className='md:w-1/2 md:px-7 text-dark'>
                        <h1 className="md:text-5xl text-2xl font-bold">We have special chicken fried</h1>
                        <p className="py-6 md:pr-14">We have special kfc chicken fried, you can buy these products from us. We have used the best products to make this dish. Number two, don't use anything that will spoil your fitness. We have many customers because our food is good. They are ordering food from this website and taking it to their homes every day.</p>
                        <button className="btn btn-warning px-20">Order Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-1/4">
                    <a href="#slide2" className="btn btn-circle btn-sm md:btn-md  text-dark bg-amber-500 hover:bg-orange-600">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-sm md:btn-md text-dark bg-amber-500 hover:bg-orange-600">❯</a>
                </div>
            </div>
            <div id="slide4" draggable='true' className="carousel-item relative w-full text-justify lg:mt-12 md:-mt-0 -mt-[1px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image4} className="md:w-[500px] w-[280px]" alt='' />
                    <div className='md:w-1/2 md:px-7 text-dark'>
                        <h1 className="md:text-5xl text-2xl font-bold">We have special fizza</h1>
                        <p className="py-6 md:pr-14">We have special fizza, you can buy these products from us. We have used the best products to make this dish. Number two, don't use anything that will spoil your fitness. We have many customers because our food is good. They are ordering food from this website and taking it to their homes every day.</p>
                        <button className="btn btn-warning px-20">Order Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-1/4">
                    <a href="#slide3" className="btn btn-circle btn-sm md:btn-md text-dark bg-amber-500 hover:bg-orange-600">❮</a>
                    <a href="#slide5" className="btn btn-circle btn-sm md:btn-md text-dark bg-amber-500 hover:bg-orange-600">❯</a>
                </div>
            </div>

            <div id="slide5" draggable='true' className="carousel-item relative w-full text-justify lg:mt-10 md:-mt-0 -mt-[10px]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image5} className="md:w-[500px] w-[280px] rounded-2xl" alt='' />
                    <div className='md:w-1/2 md:px-7 text-dark'>
                        <h1 className="md:text-5xl text-2xl font-bold text-justify">We have all kinds of drinks here</h1>
                        <p className="md:py-6 md:pr-14">We have special fizza, you can buy these products from us. We have used the best products to make this dish. Number two, don't use anything that will spoil your fitness. We have many customers because our food is good. They are ordering food from this website and taking it to their homes every day.</p>
                        <button className="btn btn-warning px-20">Order Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 md:top-1/2 top-1/4">
                    <a href="#slide4" className="btn btn-circle btn-sm md:btn-md text-dark bg-amber-500 hover:bg-orange-600">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-sm md:btn-md text-dark bg-amber-500 hover:bg-orange-600">❯</a>
                </div>
            </div>
        </div>

    );
};

export default Carasoul;