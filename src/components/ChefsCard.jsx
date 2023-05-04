import React, { useEffect, useState } from 'react';
import SingleChefCard from './SingleChefCard';

const ChefsCard = () => {

    const [allChefs, setAllChefs] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/allchefs')
        .then(res => res.json())
        .then(data => setAllChefs(data))
        .catch(error => console.log(error.message))
    }, [])

    return (
        <div>
            <h1 className='text-center text-3xl font-bold mb-10'>All Chefs List</h1>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
                {
                    allChefs.map(chefs => <SingleChefCard
                    key={chefs.id}
                        chefs={chefs}
                    ></SingleChefCard>)
                }
            </div>
            
        </div>
    );
};

export default ChefsCard;