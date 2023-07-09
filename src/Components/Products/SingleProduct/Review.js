import React from 'react';

const Review = ({ items }) => {

    const { email, review, userName } = items;

    return (
        <div>
            <div className="card lg:w-96 w-96 lg:mx-auto mt-4 bg-green-900 shadow-xl">
                <div className="card-body text-justify">
                    <h2 className="card-title font-bold text-xl text-dark">Name : {userName} </h2>
                    <p className='font-bold text-lg text-dark'>Email : {email} </p>
                    <p className='font-bold text-dark'>Review : {review} </p>
                </div>
            </div>
        </div>
    );
};

export default Review;