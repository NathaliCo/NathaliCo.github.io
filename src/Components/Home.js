import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import Navigation from './Navigation'
import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import ProyectsList from './ProyectsList'
import './home.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Footer from './Footer';

export default class Header extends Component {
    constructor() {
		super();

    }	  
    
	render() {
		
        return (
         
            <React.Fragment>
              <SocialNetworksBar/>
              <Navigation/>
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
              <section class="home">
            <div class="container">
  <div class="name">Nathalie Cortez</div>
  <div class="subtitle"> Front end Developer + Antropologist + Musician </div>
 
  <button class="btn waves-effect waves-light">Let's talk
    <i class="material-icons right">send</i>
  </button>
        
</div>
</section>
</ScrollAnimation>
<About/>
<Skills/>
<ProyectsList/>
<Contact/>
<Footer/>
</React.Fragment>

        )
    }
}



