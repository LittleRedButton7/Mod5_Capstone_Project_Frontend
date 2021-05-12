export default (state, action) => {
    switch(action.type){
        case "ADD_RECIPE_TO_FAVORITES":
            return {
                ...state,
                favoriteRecipes: [action.payload, ...state.favoriteRecipes]
            }
        case "REMOVE_RECIPE_FROM_FAVORITES":
            return {
                ...state,
                favoriteRecipes: state.favoriteRecipes.filter(recipe => recipe !== action.payload)
            }
        default:
            return state;
    }
}