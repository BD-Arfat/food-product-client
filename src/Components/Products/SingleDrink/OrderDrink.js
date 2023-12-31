import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const OrderDrink = () => {

    const { name, image, price, _id, } = useLoaderData()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    

    const handelSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.userName.value;
        const name = form.name.value;
        const email = form.email.value;
        const review = form.review.value;

        const data = {
            userName : userName,
            name: name,
            email: email,
            review: review,
            serviceId: _id
        };

        fetch("https://food-products-server.vercel.app/reviews", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    form.reset()
                    toast.success(`Thank you for your review`);
                    navigate('/myReview')
                }
            })

    }

    return (
        <div>
            <h1 className='font-bold text-dark mt-8 text-justify ms-10 text-4xl'>You go through food reviews</h1>

            <div className="hero lg:justify-start">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <form onSubmit={handelSubmit} className="card flex-shrink-0 w-full lg:w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input type="text" name='userName' required placeholder="Type here" className="input input-bordered input-warning lg:w-96 w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name='name' defaultValue={name} disabled placeholder="Type here" className="input input-bordered input-warning lg:w-96 w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Type here" className="input input-bordered input-warning lg:w-96 w-full" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Let us know what you think</span>
                                </label>
                                <textarea name='review' type='text' className="textarea textarea-warning lg:w-96 w-full" required placeholder="Write a review"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button  className="btn btn-warning">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderDrink;