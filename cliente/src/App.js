import React, { Component } from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import {auth} from './routes/auth/auth'
import Dashboard from './pages/Dashboard'
import './App.css'
const App = () => { 
  return (
    <BrowserRouter>
      <Route exact path="/auth" component={auth} />
      <Route exact path="/games" component={Dashboard}/>
      <Route exact path="/deals" component={Dashboard}/>
    </BrowserRouter>
  );
}

export default App;
