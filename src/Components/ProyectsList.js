import React, { Component } from 'react'
import './proyect.css'
import { proyects } from "./proyects.json";
import Proyect from "./Proyect"
import Title from './Title';
import cipher from "../assets/cipher.png";
import dataLovers from "../assets/dataLovers.png";
import mdLinks from "../assets/mdLinks.png";
import burgerQueen from "../assets/burgerQueen.png";
import organaHome from "../assets/organaHome.png"
import ScrollAnimation from 'react-animate-on-scroll';


export default class ProyectsList extends Component {
    constructor() {
        super();

        this.state = {
            proyect:proyects
        }

    }
    render() {
        return (
            
            <React.Fragment>
<ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
                <div className = "proyects mt-40">
          <Title  name = "Proyects"/>

                    <div className = "row mt-30">
 <Proyect img={organaHome} name={this.state.proyect[1].name} tools={this.state.proyect[1].tools} enviroment={this.state.proyect[1].enviroment} code = {this.state.proyect[1].code} />
 <Proyect img={burgerQueen} name={this.state.proyect[2].name} tools={this.state.proyect[2].tools} enviroment={this.state.proyect[2].enviroment} code = {this.state.proyect[2].code} />              
 <Proyect img={cipher} name={this.state.proyect[3].name} tools={this.state.proyect[3].tools} enviroment={this.state.proyect[3].enviroment} code = {this.state.proyect[3].code} />
 <Proyect img={mdLinks} name={this.state.proyect[4].name} tools={this.state.proyect[4].tools} enviroment={this.state.proyect[4].enviroment} code = {this.state.proyect[4].code} />     
 <Proyect img={dataLovers} name={this.state.proyect[5].name} tools={this.state.proyect[5].tools} enviroment={this.state.proyect[5].enviroment} code = {this.state.proyect[5].code} />
                    </div>
                </div>
                </ScrollAnimation>
                </React.Fragment>
        )
    }
}



