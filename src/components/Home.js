import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import BottomNavigation from './BottomNavigation'
import { fadeIn } from 'react-animations'
import { bounceInRight } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './home.css';
import Title from './Title';
const styles = {
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
          <Title  name = "Nathalie Cortez"/>
            <h2 className="nf-r1">Frontend Developer / Vanilla Javascript / React / Node </h2>
            <span className="lta-source" style={styles.bounceInRight}>Nathalie Cortez</span>
            <span className = "descpritionHome"> Front-end developer
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
