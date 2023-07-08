import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import HomeDrinkProduct from './HomeDrinkProduct';

const HomeDrinkProducts = () => {
    const { data: drink = [] } = useQuery({
        queryKey: ['drink'],
        queryFn: async () => {
            const res = await fetch('https://food-products-server.vercel.app/drink');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto mt-28 gap-7'>
                {
                    drink.map(items => <HomeDrinkProduct key={items._id} items={items} />)
                }
            </div>
            <div>
                <Link to={'/products/drinkProducts'} className='btn btn-warning w-96 mx-auto mt-11'>See More</Link>
            </div>
        </div>
    );
};

export default HomeDrinkProducts;