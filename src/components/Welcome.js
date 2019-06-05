import React, { Component } from 'react'

import './welcome.css';

export default class HomePage extends Component {
    constructor() {
		super();
		this.state = {
            shown: true,
            transition: true,
		};
    }	
    toggle() {
		this.setState({
            shown: !this.state.shown,
            transition: !this.state.transition
        });
	}
		componentDidMount=()=>{
            setTimeout (()=>this.toggle(),5000)
        }
        
       
	render() {
		var shown = {
            display: this.state.shown ? "block" : "none",
           // display:this.state.transition ? "presentation-block" :"presentation-none"
		};
		
        return (
            <section  className = "presentation" style={shown}>
       <div id="stars"></div>
       <div id="stars2"></div>
       <div id="stars3"></div>
    <div className = "namePresentation">Nathalie Cortez</div> 
<div className = "frontendPresentation"> 
  <span>&lt;Frontend Developer&gt;</span>
</div>
<h2 className = "builtTogether">Let´s built together </h2>
</section>
        )
    }
}
