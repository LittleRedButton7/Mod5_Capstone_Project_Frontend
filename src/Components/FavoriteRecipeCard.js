import React, { useContext } from 'react';
import {GlobalContext, GlobalProvider} from '../Context/GlobalState';
import './component.css'
import { FavoriteRecipeControls } from './FavoriteRecipeControls';
// import FavoriteRecipes from './FavoriteRecipes';

export default function RecipeCard({recipe, type}) {
    console.log(recipe)
    console.log(recipe.totalNutrients.FAT.quantity)

    const {addRecipeToFavorites, favoriteRecipes} = useContext(GlobalContext)

    let storedRecipe = favoriteRecipes.find(rec => rec.label === recipe.name);

    const favoriteButtonDisabled = storedRecipe ? true : false

    return (
        <div className="favorite-recipe-card">
            <img src={recipe.image} alt="recipe.name" className="favorite-recipe-image"></img>
            <h1 className="favorite-recipe-title">{recipe.label}</h1>
            <button className="favorite-recipe-url"><a href={recipe.url}>See Full Recipe</a></button>
            <ul className="favorite-nutrient-list">
                <ul>Recipe Calories: {recipe.calories.toFixed(0)} cals</ul>
                <ul>Recipe Total Fat: {recipe.totalNutrients.FAT.quantity.toFixed(0)} g</ul>
                <ul>Recipe Total Carbs: {recipe.totalNutrients.CHOCDF.quantity.toFixed(0)} g</ul>
                <ul>Recipe Total Protein: {recipe.totalNutrients.PROCNT.quantity.toFixed(0)} g</ul>
                <ul>Total Servings: {recipe.yield}</ul>
            </ul>
            {/* <button className="add-recipe-button" disabled={favoriteButtonDisabled} onClick={() => addRecipeToFavorites(recipe)} >Add to my recipe book</button> */}
            <FavoriteRecipeControls type={type} recipe={recipe}/>
        </div>
    )
}