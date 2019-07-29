import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import Navigation from './Navigation'
import About from './About'
import Contact from './Contact'
import Skills from './Skills'
import ProyectsList from './ProyectsList'
import './home.css';
import Footer from './Footer';
import Home from './Home';


export default class Header extends Component {
    constructor() {
		super();

    }	  
    
	render() {
		
        return (
         
            <React.Fragment>
              <SocialNetworksBar/>
              <Navigation/>
<a name = "home"></a>
<Home/>
<a name="about"> </a>
<About/>
<a name="skills"> </a>
<Skills/>
<a name="proyectsList"> </a>
<ProyectsList/>
<a name="contact"> </a>
<Contact/>
<Footer/>
</React.Fragment>

        )
    }
}



