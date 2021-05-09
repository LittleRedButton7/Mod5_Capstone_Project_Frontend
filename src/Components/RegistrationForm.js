import React, { Component } from 'react'
import './component.css'
import { Route, Link } from 'react-router-dom';

class Register extends Component {
    
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    register = event => {
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/Mod5_backend_app/users/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(data => data.json())
        .then(
            data => {
                alert("User Create. Please return to Login and login.")
                console.log(data);
            }
        )
        .catch(error => console.error(error))
    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
        
    }
    
    render() {
        return (
            <div className="register">
                <h1>Sign Up</h1>
                <label>
                    Username: 
                    <input type="text" name="username" 
                    value={this.state.credentials.username}
                    onChange={this.inputChanged}/>
                </label>
                <br></br>
                <label>
                    Password: 
                    <input type="password" name="password" 
                    value={this.state.credentials.password}
                    onChange={this.inputChanged}/>
                </label>
                <br></br>
                <button onClick={this.register}>Sign Up!</button>
                <br></br>
                <Link className="link" to="/login">Back to Login</Link>
            </div>
        )
    }
}

export default Register;