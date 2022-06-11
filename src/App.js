import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Stocks from './components/Stocks';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/stonks">
          <Stocks />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
