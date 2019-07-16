import React from 'react';
import Home from './components/Home'
import HomePage from './components/HomePage'
import About from './components/About'
import Skills from './components/Skills'
import Proyects from './components/ProyectsList'
import Contact from './components/Contact'
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  
  return (
     <BrowserRouter>
     <Route exact path="/" component={HomePage} />
     <Route path ="/home" component = {HomePage}/>
     <Route path="/about" component={About} />
     <Route path="/skills" component={Skills} />
     <Route path="/proyects" component={Proyects} />
     <Route path="/contact" component={Contact} />
   </BrowserRouter>
  );
}

export default App;





