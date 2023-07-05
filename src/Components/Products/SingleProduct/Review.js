import React from 'react';

const Review = ({ items }) => {

    const { email, review, userName } = items;

    return (
        <div>
            <div className="card w-96 mx-auto mt-4 bg-green-900 shadow-xl">
                <div className="card-body text-justify">
                    <h2 className="card-title font-bold text-xl text-white">Name : {userName} </h2>
                    <p className='font-bold text-lg text-white'>Email : {email} </p>
                    <p className='font-bold text-white'>Review : {review} </p>
                </div>
            </div>
        </div>
    );
};

export default Review;