import React, { useState } from 'react'
import RecipeCard from './RecipeCard'
import SearchField from './SearchField';
import './component.css'

export default function RecipeContainer() {
    const [index, setIndex] = useState(0)

    const [recipeResults, setRecipeResults] = useState([]);
  // const [searchIngredients, setSearchIngredients] = ([])

    const APP_ID = "4fc555a9";
    const APP_KEY = "b287f340a47e9e367b3a86a5a2c6501f";

    function getRecipes(query) {
        fetch(`https://api.edamam.com/search?q=${query}&to=100&app_id=${APP_ID}&app_key=${APP_KEY}`)
            .then(response => response.json())
            .then(({hits}) => setRecipeResults(hits)) 
    }
    
    console.log(recipeResults)


    const showRecipes = () => {
        return recipeResults.slice(index, index + 15).map(recipe => {
            return <RecipeCard key={recipe.recipe.name} recipe={recipe.recipe} />
        })
    }

    return (
        <>
            <SearchField getRecipes={getRecipes} />
            <div className="recipe-card-container">{showRecipes()}</div>
            {index > 0 && <button className="previous-page-button" onClick={() => setIndex(index - 15) }>Previous Page</button>}
            {index < 85 && <button className="next-page-button" onClick={() => setIndex(index + 15) }>Next Page</button>}
        </>
    )
}

{/* <RecipeContainer recipes={recipeResults}/> */}