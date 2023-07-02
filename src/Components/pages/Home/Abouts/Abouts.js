import React from 'react';
import image1 from '../../../../image/chiken.png'
import image2 from '../../../../image/chiken-fried.png'

const Abouts = () => {
    return (
        <div className="hero my-36 mb-48">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 lg:ps-16 relative' draggable='true'>
                <img src={image1} alt='' className="w-4/5 rounded-lg shadow-2xl border-2 border-white h-[500px]" />
                <img src={image2} alt='' className="w-3/5 absolute rounded-lg shadow-2xl border-2 border-white h-[320px] right-5 top-1/2" />
                </div>
                <div className='w-1/2 text-justify'>
                    <h1 className="text-4xl font-bold text-white">Why should you buy products from us?</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning px-12">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Abouts;