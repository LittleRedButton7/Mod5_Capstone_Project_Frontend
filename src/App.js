import './App.css';
import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import RecipeContainer from './Components/RecipeContainer';
import Header from './Components/Header';
import Login from './Components/LoginForm';
import Register from './Components/RegistrationForm';
import RecipeBook from './Components/RecipeBook';
// import SearchField from './Components/SearchField';
import LoginRegisterLinks from './Components/LoginRegisterLinks';

function App() {

  return (
    <div className="App">
      <Header className="header"/>
      <Route exact path='/' component={LoginRegisterLinks} /> 
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/recipebook' component={RecipeBook} />
      <Route exact path='/search' component={RecipeContainer} />
    </div>
  );
}

export default App;