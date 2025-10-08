import React, { Fragment } from 'react';
import HomeHero from './HomeHero';
import HomeApps from './HomeApps';

const Home = () => {
    return (
        <div className="bg-[#F5F5F5] flex flex-col items-center justify-center py-20">
         <HomeHero />   
         <HomeApps />
        </div>
    );
};

export default Home;