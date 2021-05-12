import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoriteRecipeCard from './FavoriteRecipeCard';
import { GlobalContext } from '../Context/GlobalState';
// import {FavoriteRecipeControls} from './FavoriteRecipeControls';

export default function FavoriteRecipes({recipe, type}) {
    const { favoriteRecipes } = useContext(GlobalContext);
    
    return (
        <div className="favorites-highest-div">
            <Link to='/search' className="search-link">Search Recipes</Link>
        <div className="favorite-recipe-div">
            {favoriteRecipes.length > 0 ? (
                <div className="favorite-recipe-grid">
                    {favoriteRecipes.map((recipe) => (
                        <FavoriteRecipeCard recipe={recipe} type="favoriteRecipes" />
                    ))}
                </div>
            ) : (
                <h2 className="no-favorite-recipes">No recipes in your recipe book yet.</h2>
            )}
            
        </div>
        </div>

    )
}
