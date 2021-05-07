import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class RecipeBook extends Component {
    state = {
        recipebooks: []
    }
    
    loadRecipes = () => {
        fetch('http://127.0.0.1:8000/Mod5_backend_app/recipebooks/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.token}`
            },
            body: JSON.stringify(this.state.credentials)
        }).then(data => data.json())
        .then(
            data => {
                this.setState({recipebooks: data});
            }
        )
        .catch(error => console.error(error))
    }
    
    render() {
        return (
            <>
                {localStorage.token ?
                    <div>
                        <h1>This is my Recipe Book!</h1>
                        {this.state.recipebooks.map(recipebook => {
                            return <h3 key={recipebook.id}>{recipebook.title}</h3>
                        })}
                        <button onClick={this.loadRecipes}>Please load my recipes.</button>
                    </div> : <h2>Please Login<Link to='/login'>Login</Link></h2>
                    // turn into react component with a link to get to login.
                }
            </>
        )
    }
}
