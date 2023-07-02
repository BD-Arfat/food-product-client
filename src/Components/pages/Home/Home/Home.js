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
            <Carasoul/>
            <Abouts/>
            <Products/>
            <Service/>
            <HomeDrinkProducts/>
            <Teams/>
            <Features/>
        </div>
    );
};

export default Home;