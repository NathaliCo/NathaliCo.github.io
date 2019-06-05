import React from 'react';
import HomePage from './components/HomePage'
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <React.Fragment>
    <HomePage/>
    </React.Fragment>
  //    <BrowserRouter>
  //    <Route exact path="/" component={ModalPage} />
  //    <Route path="/HomePage" component={HomePage} />
  //  </BrowserRouter>
  );
}

export default App;
