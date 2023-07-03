import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <div>
                <h1 className='text-white font-bold ms-5 mt-4 text-4xl text-justify'>Please add your product</h1>
            </div>
            <div className="hero justify-start">
                <div className="hero-content">
                    <div className="card w-full  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Product Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Type here" className="input input-bordered input-warning w-96" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Product Image Url</span>
                                </label>
                                <input type="file" name='image' placeholder="Type here" className="input input-bordered input-warning w-96" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Product Price</span>
                                </label>
                                <input type="number" name='price' placeholder="Type here" className="input input-bordered input-warning w-96" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Product Rating</span>
                                </label>
                                <input type="number" name='rating' placeholder="Type here" className="input input-bordered input-warning w-96" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-warning">Add Your Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;