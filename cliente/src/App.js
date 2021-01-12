import React, { Component } from "react";
import { Router, Switch, Route } from 'react-router-dom';
import {auth} from './routes/auth/auth'
import {games} from './routes/games/gamesPage'

const App = () => { 
  return (
    <Switch>
      <Route exact path="/" component={games} />
      <Route exact path="/auth" component={auth} />
    </Switch>
  );
}

export default App;
