import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {Route} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Route path='/'>
    <Home/>
    </Route>
   
    </div>
  );
}

export default App;
