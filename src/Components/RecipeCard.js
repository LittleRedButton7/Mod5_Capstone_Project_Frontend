import React, { useContext } from 'react';
import {GlobalContext, GlobalProvider} from '../Context/GlobalState';
import './component.css'
import FavoriteRecipeControls from './FavoriteRecipeControls';
import ReactCardFlip from 'react-card-flip';
// import FavoriteRecipes from './FavoriteRecipes';

export default function RecipeCard({recipe, type}) {
    console.log(recipe)
    // console.log(recipe.totalNutrients.FAT.quantity)

    ///post request: 
    const {addRecipeToFavorites, favoriteRecipes} = useContext(GlobalContext)

    let storedRecipe = favoriteRecipes.find(rec => rec.label === recipe.label);

    const favoriteButtonDisabled = storedRecipe ? true : false

    const mappedIngredients = () => {
        console.log(recipe.ingredients)
        return recipe.ingredients.map(ingredient => {
            return <ul>{ingredient.text}</ul>
        })
    }

    return (
        <div>
            {/* <input type="checkbox" name="change" id="change"></input> */}
            <div className="flip-card">
                
                <div className="recipe-card-inner">
                    <div className="flip-card-front">
                        <img src={recipe.image} alt="recipe.name" className="recipe-image"></img>
                        <h1 className="recipe-title">{recipe.label}</h1>
                        
                        <ul className="nutrient-list">
                            <ul>Recipe Calories: {recipe.calories.toFixed(0)} cals</ul>
                            <ul>Recipe Total Fat: {recipe.totalNutrients.FAT.quantity.toFixed(0)} g</ul>
                            <ul>Recipe Total Carbs: {recipe.totalNutrients.CHOCDF.quantity.toFixed(0)} g</ul>
                            <ul>Recipe Total Protein: {recipe.totalNutrients.PROCNT.quantity.toFixed(0)} g</ul>
                            <ul>Total Servings: {recipe.yield}</ul>
                        </ul>
                        
                        {/* <button className="hover-button" for="change">Click for Ingredients</button>                 */}
                    </div>
                    <div className="flip-card-back">
                        <h1>{recipe.label}</h1>
                        <h2>{mappedIngredients(recipe)}</h2>
                        <button className="toggle-to"><a href={recipe.url}>See Full Recipe</a></button>
                        <button className="add-recipe-button" disabled={favoriteButtonDisabled} onClick={() => addRecipeToFavorites(recipe)} >Add to my recipe book</button>
                        {/* <button className="toggle-back">Flip Back</button> */}
                    </div>
                    
                    {/* <button className="flip-button">Flip for full ingredient list.</button> */}
                </div>
            </div>
        </div>
    )
}
