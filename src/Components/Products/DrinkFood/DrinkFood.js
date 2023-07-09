import React from 'react';
import { useQuery } from 'react-query';
import SingleDrinkFood from './SingleDrinkFood';

const DrinkFood = () => {
    const { data: drink = [] } = useQuery({
        queryKey: ['drink'],
        queryFn: async () => {
            const res = await fetch('https://food-products-server.vercel.app/drinks');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className='text-white font-bold text-4xl mt-10'>All types of drink products are available here</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-10 gap-4'>
                {
                    drink.map(items => <SingleDrinkFood key={items._id} items={items} />)
                }
            </div>
        </div>
    );
};

export default DrinkFood;