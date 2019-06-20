import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import BottomNavigation from './BottomNavigation'
import { fadeIn } from 'react-animations'
import { bounce } from 'react-animations';
import { bounceInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './home.css';

const styles = {
  bounce: {
    animation: 'x 2s',
    animationName: Radium.keyframes(bounce, 'bounce')
  },
  bounceInRight:{
    animation: 'x 2s',
    animationName: Radium.keyframes(bounceInRight, 'InRight')
  },
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}
export default class WelcomePage extends Component {
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
          });
    }
      componentDidMount=()=>{
              setTimeout (()=>this.toggle(),6000)
          }
          
         
    render() {
      var hidden = {
        display: this.state.shown ? "none" : "block",
      }
      
        return (
          <StyleRoot>
            <section className = "homePage" style={hidden}>
              <div style={styles.fadeIn}>
       <SocialNetworksBar/>
      <div className="nf">
          <div>
          <h1 className="nf-r2 " style={styles.bounce}>Nathalie Cortez</h1>
            <h2 className="nf-r1">Frontend Developer / Vanilla Javascript / React / Node </h2>
            <span className="lta-source" style={styles.bounceInRight}>Nathalie Cortez</span>
            <span className = "descpritionHome"> Front end developer, antropóloga y músico, tengo 28 años y una de mis actividades favoritas, además de la literatura, es aprender cosas nuevas, razón por la cual decidí adentrarme en el mundo tech. Mi meta a largo plazo es poder generar un cambio social a través de mi código. Me interesa estar actualizada en las nuevas tecnologías, por ello busco  un lugar donde pueda seguir desarrollando mis aptitudes y capacidades como desarrolladora web. Aunque mi primer acercamiento  con la programación ha sido en front end, me gustaría más adelante aprender sobre tecnologías back-end. .   
              </span>
          </div>
          
        </div>
        <BottomNavigation/>
        </div>
        </section>
        </StyleRoot>
        )
    }
}
