import React, { useEffect, useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const ChefDetails = () => {
    const [chef, setChef] = useState('');


    const { id } = useParams();
    // console.log(id); ok
    const recipeData = useLoaderData();
    // console.log(recipeData);  ok

    useEffect(() => {
        fetch(`http://localhost:5000/allchefs/${id}`)
            .then(res => res.json())
            .then(data => setChef(data))
    }, [])
    // console.log(chef); ok
    const { picture, name, experience, recipes, likes, bio, recipe_id } = chef;


    return (
        <div className='my-10'>
            <h1 className='text-center font-bold text-4xl text-pink-400'>WelCome To FoodKa Recipe</h1>

            <div className='my-10 flex justify-center'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img className='w-full rounded-md' src={picture} alt="chefs" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {name}
                            <div className="badge badge-secondary">expert</div>
                        </h2>
                        <p>Bio: {bio}</p>
                        <p className='font-semibold'>Year of experience: {experience}</p>
                        <div className="card-actions justify-end my-3">
                            <div className="badge badge-outline">Recipe: {recipes}</div>
                            <div className="badge badge-outline"><FaThumbsUp /> <span className='ml-2'>{likes}</span></div>
                        </div>

                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-center font-bold text-4xl text-pink-400'>Chef's Best Recipes</h1>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                recipeData.map(recipe => <RecipeCard
                    key={recipe.unique_id}
                    recipe={recipe}
                ></RecipeCard>)
            }
            </div>
            


        </div>
    );
};

export default ChefDetails;