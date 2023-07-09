import React from 'react';
import image1 from '../../../../image/image-2.gif'

const Abouts = () => {
    return (
        <div className="hero md:mt-36 mb-48">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 lg:ps-16 relative' draggable='true'>
                <img src={image1} alt='' className="lg:w-4/5 w-full mx-auto rounded-lg shadow-2xl border-2 border-white lg:h-[500px]" />
                </div>
                <div className='lg:w-1/2 text-justify'>
                    <h1 className="md:text-4xl font-bold text-2xl text-white">Why should you buy products from us?</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning lg:px-12 w-full md:w-48">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Abouts;