import React from 'react';
import Contact from './Components/Contact'
import './App.css'
import Welcome from './Components/Welcome'
import LandingPage from './Components/LandingPage'
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  
  return (
    <React.Fragment>
  
       <BrowserRouter>
       <Route exact path="/" component={Welcome} />
       <Route exact path="/landingPage" component={LandingPage} />
       <Route path="/contact" component={Contact} />
       </BrowserRouter>
       </React.Fragment> 
   
  );
}

export default App;



