import React,  { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial state
const initialState = {
    favoriteRecipes: localStorage.getItem('favoriteRecipes')
    ? JSON.parse(localStorage.getItem('favoriteRecipes')) 
    : [],
}

//create context
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('favoriteRecipes', JSON.stringify(state.favoriteRecipes))
    }, [state]);

    //actions
    //Do I need to add a url to the Django for this in the urls on the project level?
    const addRecipeToFavorites = (recipe) => {
        dispatch({type: "ADD_RECIPE_TO_FAVORITES", payload: recipe});
        fetch('http://127.0.0.1:8000/api/recipebooks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.token}`
            },
            body: JSON.stringify(recipe)
        }).then(data => data.json())
        .then(result => console.log('posted recipe', result))
    }

    const removeRecipeFromFavorites = (recipe) => {
        dispatch({type: "REMOVE_RECIPE_FROM_FAVORITES", payload: recipe});
    }

    return (
        <GlobalContext.Provider 
            value={{
                favoriteRecipes: state.favoriteRecipes, 
                addRecipeToFavorites, 
                removeRecipeFromFavorites
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    )
}