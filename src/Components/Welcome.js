import React, { Component } from 'react'
import './welcome.sass';
import './welcomeText.css';
import { Link } from "react-router-dom"

export default class HomePage extends Component {
    constructor() {
		super();

    }	  

  
	render() {
		
        return (
         
            <React.Fragment>
            <section className = "presentation">
       <div id="stars"></div>
       <div id="stars2"></div>
       <div id="stars3"></div>
    <div className = "namePresentation">Nathalie Cortez</div> 
<div className = "frontendPresentation"> 
  <span>&lt;Front end Developer&gt;</span>
</div>
<h2 className = "builtTogether">Let's build it together </h2>
<Link to="/landingPage" class="sp-circle-link" >Start</Link>
</section>
</React.Fragment>

        )
    }
}
