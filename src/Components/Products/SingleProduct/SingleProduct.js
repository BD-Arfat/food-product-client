import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const SingleProduct = () => {

    const { user } = useContext(AuthContext)

    const { name, image, _id, price, description } = useLoaderData();

    const handelSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const review = form.review.value;

        const data = {
            name: name,
            email: email,
            review: review,
            serviceId: _id
        };

        fetch("http://localhost:5000/reviews", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.acknowledged === true){
                form.reset()
                toast.success(`Thank you for your review`)
            }
        })

    }

    return (
        <div draggable='true' className='mb-20'><h1 className='text-white font-bold text-4xl mt-5'>Here are all the details of our products</h1>
            <div className='flex justify-between'>
                <div>
                    <img src={image} className='w-[500px] h-[500px]' alt="" />
                    <h1 className='text-white font-bold text-2xl text-justify ms-10'>Name : {name} </h1>
                    <p className='text-white font-bold text-justify ms-10 text-xl mt-4'>Price : {price} </p>
                    <p className='text-white text-justify ms-10 mt-4'>Description : {description} </p>
                    <div className=' text-justify ms-10 mt-4'>
                        <button className='w-96  btn btn-warning'>Add to cart</button>
                    </div>

                    {/* form */}
                    <h1 className='font-bold text-white mt-8 text-justify ms-10 text-4xl'>You go through food reviews</h1>

                    <div className="hero justify-start">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <form onSubmit={handelSubmit} className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Product Name</span>
                                        </label>
                                        <input type="text" name='name' defaultValue={name} disabled placeholder="Type here" className="input input-bordered input-warning w-96" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Type here" className="input input-bordered input-warning w-96" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Let us know what you think</span>
                                        </label>
                                        <textarea name='review' type='text' className="textarea textarea-warning w-96" required placeholder="Write a review"></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-warning">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div className='w-1/2 mt-10'>
                    hi my name is ariful islam arfat
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;