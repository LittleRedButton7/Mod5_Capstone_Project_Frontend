import './App.css';
import React, { useState } from 'react';
import RecipeContainer from './Components/RecipeContainer';
import SearchField from './Components/SearchField';
import Header from './Components/Header';

function App() {
  const [recipeResults, setRecipeResults] = useState([]);
  // const [searchIngredients, setSearchIngredients] = ([])

  const APP_ID = "4fc555a9";
  const APP_KEY = "b287f340a47e9e367b3a86a5a2c6501f";

  function getRecipes(query) {
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      .then(response => response.json())
      .then(({hits}) => setRecipeResults(hits)) 
  }
  
  return (
    <div className="App">
      <Header className="header"/>
      <SearchField getRecipes={getRecipes}/>
      <RecipeContainer recipes={recipeResults}/>
    </div>
  );
}

export default App;
