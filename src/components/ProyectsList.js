import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import BottomNavigation from './BottomNavigation'
import './proyect.css'
import { proyects } from "./proyects.json";
import Proyect from "./Proyect"
import Title from './Title';


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
                <SocialNetworksBar/>

                <div className = "proyects mt-40">
          <Title  name = "Proyects"/>

                    <div className = "row mt-30">
 <Proyect img={this.state.proyect[0].img} name={this.state.proyect[0].name} tools={this.state.proyect[0].tools} enviroment={this.state.proyect[0].enviroment} code = {this.state.proyect[0].code} />
 <Proyect img={this.state.proyect[1].img} name={this.state.proyect[1].name} tools={this.state.proyect[1].tools} enviroment={this.state.proyect[1].enviroment} code = {this.state.proyect[1].code} />
 <Proyect img={this.state.proyect[1].img} name={this.state.proyect[1].name} tools={this.state.proyect[2].tools} enviroment={this.state.proyect[2].enviroment} code = {this.state.proyect[2].code} />
                    
                    
 <Proyect img={this.state.proyect[3].img} name={this.state.proyect[3].name} tools={this.state.proyect[3].tools} enviroment={this.state.proyect[3].enviroment} code = {this.state.proyect[3].code} />
 <Proyect img={this.state.proyect[4].img} name={this.state.proyect[4].name} tools={this.state.proyect[4].tools} enviroment={this.state.proyect[4].enviroment} code = {this.state.proyect[4].code} />
                    
 <Proyect img={this.state.proyect[5].img} name={this.state.proyect[5].name} tools={this.state.proyect[5].tools} enviroment={this.state.proyect[5].enviroment} code = {this.state.proyect[5].code} />
                    </div>
                </div>
                <BottomNavigation/>
                </React.Fragment>
               
        )
    }
}



