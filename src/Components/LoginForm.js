import React, { Component } from 'react'
import './component.css'
import { Route, Link } from 'react-router-dom';
// import LoginRegisterLinks from './LoginRegisterLinks';

class Login extends Component {
    
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    userLogin = (tok) => {
        localStorage.setItem('token', tok)
        this.props.setIsLoggedIn(true)
        this.props.history.push('/search')
    }



    login = event => {
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(data => data.json())
        .then(
            data => {
                if(data.non_field_errors){
                    alert("Login Failed. Please try again.")
                }else{
                    this.userLogin(data.token);
                    console.log(data)
                }
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
            <div className="login">
                <h1>Login</h1>
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
                <button onClick={this.login}>Login</button>
                <br></br>
                <Link className="link" to="/register">Sign up now!</Link>
            </div>
        )
    }
}

export default Login;