import './App.css';
import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import RecipeContainer from './Components/RecipeContainer';
import Header from './Components/Header';
import Login from './Components/LoginForm';
import Register from './Components/RegistrationForm';
import RecipeBook from './Components/RecipeBook';

function App() {

  const [token, setToken] = useState('');
  
  const userLogin = (tok) => {
    setToken(tok)
  }
  
  return (
    <div className="App">
      <Header className="header"/>
      {/* <Login userLogin={userLogin}/>
      <Register /> */}
      <Route exact path='/'/> 
      <div className="login-link">
      <Link to='/login'>Login</Link> 
      </div>
      <h3>OR</h3>
      <div className="register-link">
      <Link to='/register'>Register Now</Link> 
      </div>
      <Route exact path='/login' render={(props) => <Login {...props} userLogin={userLogin} /> } />
      <Route exact path='/register' render={(props) => <Register {...props} /> } />
      <RecipeBook token={token} />
    </div>
  );
}

export default App;