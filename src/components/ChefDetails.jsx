import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams  } from 'react-router-dom';

const ChefDetails = () => {
    const [chef, setChef] = useState('');


    const {id} = useParams();
    // console.log(id); ok
    const recipeData = useLoaderData();
    console.log(recipeData); 

    useEffect( () => {
        fetch(`http://localhost:5000/allchefs/${id}`)
        .then(res => res.json())
        .then(data => setChef(data))
    }, [])
    console.log(chef);
    const { picture, name, experience, recipes, likes, bio, recipe_id } = chef;


    return (
        <div>
            
        </div>
    );
};

export default ChefDetails;