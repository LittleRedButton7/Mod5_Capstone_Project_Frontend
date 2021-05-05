import React from 'react'
import RecipeCard from './RecipeCard'
import './component.css'

export default function RecipeContainer(props) {
    const showRecipes = () => {
        return props.recipes.map(recipe => {
            return <RecipeCard key={recipe.recipe.name} recipe={recipe.recipe} />
        })
    }

    return (
        <div className="recipe-card-container">{showRecipes()}</div>
    )
}
