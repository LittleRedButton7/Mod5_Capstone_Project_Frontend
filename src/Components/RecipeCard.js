import React from 'react'
import './component.css'

export default function RecipeCard({recipe}) {
    console.log(recipe)
    console.log(recipe.totalNutrients.FAT.quantity)

    // function saveRecipe(clickedRecipe){
    //     const recipeId = recipe.id
    // }

    return (
        <div className="recipe-card">
            <img src={recipe.image} alt="recipe.name" className="recipe-image"></img>
            <h1 className="recipe-title">{recipe.label}</h1>
            <button className="recipe-url"><a href={recipe.url}>See Full Recipe</a></button>
            <ul className="nutrient-list">
                <ul>Recipe Calories: {recipe.calories.toFixed(0)} cals</ul>
                <ul>Recipe Total Fat: {recipe.totalNutrients.FAT.quantity.toFixed(0)} g</ul>
                <ul>Recipe Total Carbs: {recipe.totalNutrients.CHOCDF.quantity.toFixed(0)} g</ul>
                <ul>Recipe Total Protein: {recipe.totalNutrients.PROCNT.quantity.toFixed(0)} g</ul>
                <ul>Total Servings: {recipe.yield}</ul>
            </ul>
            <button className="add-recipe-button" >Add to my recipe book</button>
        </div>
    )
}
