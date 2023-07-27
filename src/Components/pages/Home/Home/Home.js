import React from 'react';
import Carasoul from '../Carasoul/Carasoul';
import Abouts from '../Abouts/Abouts';
import Products from '../Products/Products';
import Service from '../Service/Service';
import HomeDrinkProducts from '../HomeDrinkProducts/HomeDrinkProducts';
import Teams from '../Teams/Teams';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
        // Carasoul
            <Carasoul/>
        // Abouts
            <Abouts/>
        // Products
            <Products/>
        // Service
            <Service/>
        // HOmeDrinkProducts
            <HomeDrinkProducts/>
        // Teams
            <Teams/>
        // Features
            <Features/>
        </div>
    );
};

export default Home;
