import React, { Component } from 'react'
import { fadeOut } from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import './welcome.sass';
import './welcomeText.css';
const styles = {
  fadeOut: {
    animation: 'x 3s',
    animationName: Radium.keyframes(fadeOut, 'fadeOut')
  }
}
export default class HomePage extends Component {
    constructor() {
		super();
		this.state = {
            style: styles,
            shown: true,
		};
    }	
    toggle() {
		this.setState({
            style: styles.fadeOut,
        });
  }
  
  style() {
    this.setState({
      shown: !this.state.shown,
        });
  }
		componentDidMount=()=>{
            setTimeout (()=>this.toggle(),4000)
            //setTimeout(()=>this.style(),7000)
        }
        
       
	render() {
		
        return (
          <StyleRoot>
            <div style= {this.state.shown}>
            <section  className = "presentation" style={this.state.style}>
       <div id="stars"></div>
       <div id="stars2"></div>
       <div id="stars3"></div>
    <div className = "namePresentation">Nathalie Cortez</div> 
<div className = "frontendPresentation"> 
  <span>&lt;Frontend Developer&gt;</span>
</div>
<h2 className = "builtTogether">Let´s built together </h2>
</section>
</div>
</StyleRoot>
        )
    }
}
