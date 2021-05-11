import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';
import RecipeContainer from './Components/RecipeContainer';
import Header from './Components/Header';
import Login from './Components/LoginForm';
import Register from './Components/RegistrationForm';
import RecipeBook from './Components/RecipeBook';
// import SearchField from './Components/SearchField';
import LoginRegisterLinks from './Components/LoginRegisterLinks';
import {GlobalProvider} from './Context/GlobalState';
import FavoriteRecipes from './Components/FavoriteRecipes';

function App({location: {pathname}, history}) {
  const showBackground = pathname === '/' || pathname === '/login' || pathname === '/register'

  const [isLoggedIn, setIsLoggedIn] = useState(false) 

  useEffect(()=> {
    localStorage.token && setIsLoggedIn(true)
  }, [])

  return (
    <GlobalProvider>
      <div className={showBackground ? "App-background-image" : "App"} >
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} history={history} className="header"/>
        <Route exact path='/' component={LoginRegisterLinks} /> 
        <Route exact path='/login' render={(props) => <Login {...props} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/recipebook' component={FavoriteRecipes} />
        <Route exact path='/search' component={RecipeContainer} />
      </div>
    </GlobalProvider>
  );
}

export default withRouter(App);