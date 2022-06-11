import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Stocks from './components/Stocks';
import Info from './components/Info';

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
        <Route exact path="/info/:symbol" render={(props) => <Info {...props} /> }/>
        {/* props spreading */}

        {/* render props provide 3 objects
        history, location (query params), match(info on url params) 
         */}
      
      </Switch>
    </div>
  );
}

export default App;
