import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import BottomNavigation from './BottomNavigation'
import { fadeIn } from 'react-animations'
import { bounce } from 'react-animations';
import { bounceInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import '../App.css';
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
            <span className = "descpritionHome">Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32

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
