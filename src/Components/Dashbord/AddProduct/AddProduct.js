import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_IMAGEBB;
    const { register, handleSubmit } = useForm();

    const handlelRegister = (data) => {
        
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const addProduct = {
                        name: data.name,
                        image: imageData.data.url,
                        price: data.price,
                        email : data.email,
                        rating: data.rating,
                        description: data.description
                    }


                    fetch("https://food-products-server.vercel.app/product", {
                        method: "POST", // or 'PUT'
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(addProduct),
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.acknowledged === true) {
                                toast.success(`Thank you for Add Your Product`)
                                navigate('/dashbord/yourProduct')
                            }
                        })


                }
            })

    }

    return (
        // start Add Products
        <div>
            <div>
                <h1 className='text-dark text-3xl mt-9 font-bold lg:ms-5 lg:mt-4 lg:text-4xl lg:text-justify'>Please add your product</h1>
                <p className='mt-8 md:font-bold text-dark'>You can't add any drink products because these are brand products. <br /> If you add, we will be forced to remove you from our website. Thank you</p>
            </div>
            <div className="hero justify-start">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <form onSubmit={handleSubmit(handlelRegister)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" {...register("name")} className="input input-bordered input-primary w-96" required />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email"  defaultValue={user?.email} {...register("email")} className="input input-bordered input-primary w-96" required />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Image Url</span>
                            </label>
                            <input type="file" {...register("image")} className="input input-bordered input-primary w-96" required />
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="number" {...register("price")} className="input input-bordered input-primary w-96" required />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Rating</span>
                            </label>
                            <input type="number" {...register("rating")} className="input input-bordered input-primary w-96" required />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <input type="text" {...register("description")} className="input input-bordered input-primary w-96" required />
                        </div>

                        { 
                            <button  className='w-96 mt-6 btn btn-warning btn-outline'>Add Your Product</button>
                        }
                    </form>
                </div>
            </div>
        </div>
// End Add Products
    );
};

export default AddProduct;
