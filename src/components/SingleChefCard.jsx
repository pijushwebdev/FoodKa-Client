import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SingleChefCard = ({ chefs }) => {
    const { id, picture, name, experience, recipes, likes, bio, recipe_id } = chefs;

    return (
        <div className='mb-10 flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-72' src={picture} alt="chefs" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">expert</div>
                    </h2>
                    <p className='font-semibold'>Year of experience: {experience}</p>
                    <div className="card-actions justify-end my-3">
                        <div className="badge badge-outline">Recipe: {recipes}</div>
                        <div className="badge badge-outline"><FaThumbsUp /> <span className='ml-2'>{likes}</span></div>
                    </div>
                    <Link to={`/recipes/${recipe_id}`}>
                        <button className='bg-pink-500 w-full text-slate-200 font-semibold py-2 rounded-md hover:bg-pink-600'>View Recipe</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default SingleChefCard;