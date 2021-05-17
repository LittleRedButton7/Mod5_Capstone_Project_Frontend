# In a Pinch
Make something with what you have in a pinch!


## Table of Contents
* [General Info](#General-Info)
* [Technologies](#Technologies)
* [Setup](#Setup)
* [Code Examples](#Code-Examples)
* [Features](#Features)
* [Status](#Status)
* [Contact](#Contact)

## General Info
I used an external Dungeons & Dragons API to pull in data on different characters and monsters. My thought was to make a website where you can create a random character and/or a random monster and then save that to your profile. One advantage of accessing the D&D API is that a Dungeon Master could very quickly pull characteristics for an NPC character or a monster during a battle.

<!-- ## Intro Video
[Fly Away! on YouTube](https://youtu.be/P52TS0hV62s) -->

## Technologies
* Django
* SQLite3 - version 1.4
* React
* HTML
* CSS


## Setup
* Fork and clone this repo into your local branch.
<!-- * From the backend, run bundle:install. -->
* Open in VS code or other text editor.
* Run npm start which will kick off the app in the localhost:3001.
*From there, create an account, login and have fun looking up recipes for ingredients that you have on hand. Note that you can see a list of all the ingredients on the back of the recipe cards.
*You can also save a recipe to your recipe book to find later. 

## Code Examples
React
```
import React, { useContext } from 'react';
import {GlobalContext, GlobalProvider} from '../Context/GlobalState';
import './component.css'
import { FavoriteRecipeControls } from './FavoriteRecipeControls';

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
            <FavoriteRecipeControls type={type} recipe={recipe}/>
        </div>
    )
}
```

CSS
```
.login{
    text-align: center;
    font-family: 'Berkshire Swash';
    margin-top: 3rem;
}

.login > label {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.login > label > input {
    border-radius: .3rem;
    height: 1.5rem;
    width: 12rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 520;
}

.login > button {
    height: 3rem;
    width: 5rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    border-radius: .3rem;
    background-color: rgb(253, 216, 216);
}

.login > .link{
    font-size: 1.5rem;
}

.forgot-password-link{
    font-size: 1.2rem;
    margin-top: 5rem;
}

/*******REGISTER********/
.register{
    text-align: center;
    font-family: 'Berkshire Swash';
    margin-top: 3rem;
}

.register > label {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.register > label > input {
    border-radius: .3rem;
    height: 1.5rem;
    width: 12rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 520;
}
.register > button {
    height: 3rem;
    width: 7rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    font-size: 1.2rem;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
    overflow: auto;
    border-radius: .3rem;
    background-color: rgb(253, 216, 216);
}

.register > .link{
    font-size: 1.5rem;
}

```

## Features
* Register as a new user and Login are both connected to the Django backend's authentication.
    * If you try to login with a username that's already taken, an alert will pop up letting you know you need to pick a different username/login.
    * If you enter an incorrect password on the login page, an alert will let you know the login was unsuccessful. 
* Recipe search function allows you to search by ingredients that you have on hand and returns a list of results.     
    * Each recipe card flips and you can see a full list of ingredients. This was designed as such because that way you can tell if you have everything without having to open the full link. This is an effort to make selecting a recipe you can make with what you have easier and quicker to find.
    * Also on the back of the card is an option to save the recipe to your recipe book. There is a link at the top that will take you to your saved recipes for reference later. 
    *Additionally, there is a link on the back of the recipe card that will take you to the full recipe. This is an external link.

## Status
This is a full stack, functioning app. However, at the moment you have to fork and clone both the frontend and the backend to get it working correctly. Eventually, I would like to deploy this live so people can access it through a functioning URL.

## Contact
Feel free to reach out and connect with me!
[Marissa Nolan](https://www.linkedin.com/in/marissanolan1/) 

### Thanks for visiting!