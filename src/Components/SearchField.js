import React, { useState } from 'react'
import './component.css'

export default function SearchField(props) {
    const [query, setQuery] = useState([])

    function handleChange(event) {
        setQuery(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.getRecipes(query)
    }

    return (
        <>
            {localStorage.token ?
                <div className="search-form">
                    <button className="my-recipe-book-button">My Recipe Book</button>
                    <form onSubmit={handleSubmit}>
                        <input
                            className="search-text-field"
                            type='text'
                            name='ingredients'
                            onChange={handleChange}
                            value={query}
                            placeholder="What ingredients do you have on hand?"
                        />
                        <input className="search-button" type="submit" value="Search Recipes"/>
                    </form>
                </div> : <h2>Please Login</h2>
            }
        </>
    )
}
