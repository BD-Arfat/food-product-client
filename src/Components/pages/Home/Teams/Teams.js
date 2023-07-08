import React from 'react';
import arfat from '../../../../image/arfat.jpg'
import badsha from '../../../../image/badsha.jpg'
import sadmar from '../../../../image/sadman.jpg'
import jidan from '../../../../image/jidan.jpg'
import arman from '../../../../image/arman.jpg'
import shakib from '../../../../image/shakib.jpg'
import group1 from '../../../../image/Group 4889.png'
import group2 from '../../../../image/Group 4891.png'
import group3 from '../../../../image/Group 4892.png'
import group4 from '../../../../image/Group 4893.png'

const Teams = () => {
    return (
        <div className='mt-28'>
            <div>
                <h1 className='text-center font-bold text-white text-5xl'>Meet Our Team</h1>
                <p className='mt-7'>the majority have suffered alteration in some form,  by injected humour, <br /> or randomised words which don't look even slightly <br />believable. </p>
            </div>

            <div className="carousel w-full mt-16 md:mt-36">
                <div id="item1" className="carousel-item grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-5 mx-auto">
                    <div className="card w-full md:w-96 bg-base-100 shadow-xl h-[500px] border-2 border-green-500">
                        <figure><img src={arfat} alt="Shoes" className='h-[300px] w-full' /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-bold text-white text-center">Name : Ariful islam</h2>
                            <p className='text-white font-bold text-lg'>CEO</p>
                            <div className="card-actions justify-center">
                                <img src={group1} alt="" />
                                <img src={group2} alt="" />
                                <img src={group3} alt="" />
                                <img src={group4} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="card w-full md:w-96 bg-base-100 shadow-xl h-[500px] border-2 border-green-500">
                        <figure><img src={badsha} alt="Shoes" className='h-[400px] w-full' /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-bold text-white text-center">Name : Badsha Uddin</h2>
                            <p className='text-white font-bold text-lg'>Vice President</p>
                            <div className="card-actions justify-center">
                                <img src={group1} alt="" />
                                <img src={group2} alt="" />
                                <img src={group3} alt="" />
                                <img src={group4} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="card w-full md:w-96 bg-base-100 shadow-xl h-[500px] border-2 border-green-500">
                        <figure><img src={sadmar} alt="Shoes" className='h-[400px] w-full' /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-bold text-white text-center">Name : Sadman Islam</h2>
                            <p className='text-white font-bold text-lg'>manager</p>
                            <div className="card-actions justify-center">
                                <img src={group1} alt="" />
                                <img src={group2} alt="" />
                                <img src={group3} alt="" />
                                <img src={group4} alt="" />
                            </div>
                        </div>
                    </div>



                </div>
                <div id="item2" className="carousel-item  mx-3 md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 gap-5">

                    <div className="card w-full md:w-96 bg-base-100 shadow-xl h-[500px] border-2 border-green-500">
                        <figure><img src={jidan} alt="Shoes" className='h-[400px] w-full' /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-bold text-white text-center">Name : Jidam islam</h2>
                            <p className='text-white font-bold text-lg'>Finance Secretary</p>
                            <div className="card-actions justify-center">
                                <img src={group1} alt="" />
                                <img src={group2} alt="" />
                                <img src={group3} alt="" />
                                <img src={group4} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="card w-full md:w-96 bg-base-100 shadow-xl h-[500px] border-2 border-green-500">
                        <figure><img src={arman} alt="Shoes" className='h-[400px] w-full' /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-bold text-white text-center">Name : Arman islam</h2>
                            <p className='text-white font-bold text-lg'>secretary</p>
                            <div className="card-actions justify-center">
                                <img src={group1} alt="" />
                                <img src={group2} alt="" />
                                <img src={group3} alt="" />
                                <img src={group4} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="card w-full md:w-96 bg-base-100 shadow-xl h-[500px] border-2 border-green-500">
                        <figure><img src={shakib} alt="Shoes" className='h-[400px] w-full' /></figure>
                        <div className="card-body">
                            <h2 className="text-3xl font-bold text-white text-center">Name : shakib all islam</h2>
                            <p className='text-white font-bold text-lg'>Assistant Finance Secretary</p>
                            <div className="card-actions justify-center">
                                <img src={group1} alt="" />
                                <img src={group2} alt="" />
                                <img src={group3} alt="" />
                                <img src={group4} alt="" />
                            </div>
                        </div>
                    </div>

                </div>



                {/* <div id="item3" className="carousel-item w-full">
                    
                </div>
                <div id="item4" className="carousel-item w-full">
                    
                </div> */}
            </div>
            <div className="flex justify-center w-full py-2 gap-2 mt-5">
                <a href="#item1" className="btn btn-xs bg-orange-700">1</a>
                <a href="#item2" className="btn btn-xs bg-orange-700">2</a>
                <a href="#item3" className="btn btn-xs bg-orange-700">3</a>
                <a href="#item4" className="btn btn-xs bg-orange-700">4</a>
            </div>

        </div>
    );
};

export default Teams;