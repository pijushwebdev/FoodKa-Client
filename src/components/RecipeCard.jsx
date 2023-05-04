import React, { useState } from 'react';
import Swal from 'sweetalert2';



const RecipeCard = ({ recipe }) => {
    const [favorite, setFavorite] = useState(false);

    const { cooking_method, ingredients, rating, recipe_name } = recipe;

    const handleAddToFavorites = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'You saved the dish',
            showConfirmButton: false,
            timer: 1500
          })
        setFavorite(true);
    };

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-pink-900">{recipe_name}</h2>
                    <p className='text-semibold text-pink-500'>Ingredients:</p>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li className='list-disc ml-10 text-slate-500' key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <p className='text-stone-500 h-36'>Cooking Method: <small>{cooking_method}</small></p>

                    <p>Rating: {rating}</p>

                    <button 
                        className='bg-pink-500 w-full text-slate-200 font-semibold py-2 rounded-md hover:bg-pink-600'
                        onClick={handleAddToFavorites}
                        disabled={favorite}
                    >
                        {favorite ? 'Added to favorites' : 'Add to favorite'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;