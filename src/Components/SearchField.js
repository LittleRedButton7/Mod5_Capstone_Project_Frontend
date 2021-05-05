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
        <div className="search-form">
            <form onSubmit={handleSubmit}>
                <input
                    className="search-text-field"
                    type='text'
                    name='ingredients'
                    onChange={handleChange}
                    value={query}
                    placeholder="What do You Have on Hand?"
                />
                <input  type="submit" value="Search Recipes"/>
            </form>
        </div>
    )
}
