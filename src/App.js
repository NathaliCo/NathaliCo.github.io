import React from 'react';
import HomePage from './components/HomePage'
import About from './components/About'
import Knowledge from './components/Knowledge'
import Proyects from './components/Proyects'
import Contact from './components/Contact'
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {
  
  return (
     <BrowserRouter>
     <Route exact path="/" component={HomePage} />
     <Route path="/about" component={About} />
     <Route path="/knowledge" component={Knowledge} />
     <Route path="/proyects" component={Proyects} />
     <Route path="/contact" component={Contact} />
   </BrowserRouter>
  );
}

export default App;
