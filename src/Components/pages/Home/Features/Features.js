import React from 'react';
import { useQuery } from 'react-query';
import Feature from './Reature';

const Features = () => {

    const {data : sponsors=[]} = useQuery({
        queryKey : ['sponsors'],
        queryFn : async()=>{
            const res = await fetch('http://localhost:5000/sponsor');
            const data =await res.json();
            return data;
        }
    })

    return (
        <div className='mt-28'>
            <div>
                <h1 className='text-center font-bold text-5xl text-white'>Those who sponsor us, have ads with us constantly</h1>
                <p className='text-white mt-8'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even <br /> slightly believable. </p>
            </div>

            <div className='flex justify-evenly items-center mt-20 mb-28'>
            {
                sponsors.map(sponsor=><Feature key={sponsor._id} sponsor={sponsor}/>)
            }
            </div>

        </div>
    );
};

export default Features;