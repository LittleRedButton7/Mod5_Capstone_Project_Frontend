import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const FavoriteRecipeControls = ({recipe, type}) => {
    const {removeRecipeFromFavorites} = useContext(GlobalContext);
    
    return (
        <div className="inner-card-controls">
            {type === 'favoriteRecipes' && (
                <>
                    <button className="control-button" onClick={() => removeRecipeFromFavorites(recipe)}>Remove from Recipe Book</button>
                </>
            )}
        </div>
    )
}
