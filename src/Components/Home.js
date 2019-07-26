import React, { Component } from 'react'
import './home.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Header extends Component {
    constructor() {
		super();

    }	  
    
	render() {
		
        return (
         
            <React.Fragment>
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
              <section class="home">
            <div class="container">
  <div class="name">Nathalie Cortez</div>
  <div class="subtitle"> Front end Developer + Antropologist + Musician </div>
 
  <button class="btn waves-effect waves-light" ><a className = "toContact" href = "#contact">Let's talk
    <i class="material-icons right">send</i></a>
  </button>
        
</div>
</section>
</ScrollAnimation>

</React.Fragment>

        )
    }
}



