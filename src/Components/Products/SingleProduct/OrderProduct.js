import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const OrderProduct = () => {

    const { user } = useContext(AuthContext)

    const {_id, name} = useLoaderData()

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
        <div>
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
    );
};

export default OrderProduct;