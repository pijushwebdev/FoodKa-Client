import React from 'react';
import HomeBanner from './HomeBanner';
import ChefsCard from './ChefsCard';
import Categories from './Categories';
import ChefGellary from './ChefGellary';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            
            <ChefsCard></ChefsCard>

            <Categories></Categories>
            <ChefGellary></ChefGellary>
        </div>
    );
};

export default Home;