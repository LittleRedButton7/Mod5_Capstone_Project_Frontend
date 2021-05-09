import React from 'react';
import RecipeCard from './RecipeCard'

export default function FavoriteRecipes({favoriteRecipes, addFavoriteRecipe }) {
    const displayFavorites = () => favoriteRecipes.map(recipe => {
        return <RecipeCard key={recipe.name} recipe={recipe.recipe} addFavoriteRecipe={addFavoriteRecipe} />
    })
    
    return (
        <div>
            {displayFavorites}
        </div>
    )
}
