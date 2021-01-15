import React, { Component } from "react";
import {Route, BrowserRouter, Redirect} from 'react-router-dom';
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import './App.css'
const App = () => { 
  
  return (
    
    <BrowserRouter>
    <Route exact path="*">
      {localStorage.getItem('token') ? <Redirect to='games'/> : <Redirect to='auth'/>}
    </Route>
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/games" component={Dashboard}/>
      <Route exact path="/deals" component={Dashboard}/>
    </BrowserRouter>
  );
}

export default App;
