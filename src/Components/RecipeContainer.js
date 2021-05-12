import React, { useState } from 'react'
import RecipeCard from './RecipeCard'
import SearchField from './SearchField';
import FavoriteRecipes from './FavoriteRecipes';
import './component.css'

export default function RecipeContainer() {
    const [index, setIndex] = useState(0)

    const [recipeResults, setRecipeResults] = useState([]);
    // const [favoriteRecipes, setFavoriteRecipes] = useState([]);

    const APP_ID = "4fc555a9";
    const APP_KEY = "b287f340a47e9e367b3a86a5a2c6501f";

    function getRecipes(query) {
        fetch(`https://api.edamam.com/search?q=${query}&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then(response => response.json())
            .then(({hits}) => setRecipeResults(hits)) 
    }
    
    console.log(recipeResults)


    const showRecipes = () => {
        return recipeResults.slice(index, index + 16).map(recipe => {
            return <RecipeCard key={recipe.recipe.name} recipe={recipe.recipe} />
        })
    }

    const handleClick = (newIndex) => {
        setIndex(newIndex)
        window.scrollTo(0,0)
    }

    return (
        <>
            <SearchField getRecipes={getRecipes} />
            <div className="recipe-card-container">{showRecipes()}</div>
            <div className="button-div">
                {index > 0 && <button className="previous-page-button" onClick={() => handleClick(index - 16) }>Previous Page</button>}
                {index < 85 && recipeResults.length > 0 && <button className="next-page-button" onClick={() => handleClick(index + 16) }>Next Page</button>}
            </div>
        </>
    )
}

{/* <RecipeContainer recipes={recipeResults}/> */}