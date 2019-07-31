import React, { Component } from "react";
import "./proyect.css";
import { proyects } from "./proyects.json";
import Proyect from "./Proyect";
import Title from "./Title";
import cipher from "../assets/cipher.png";
import dataLovers from "../assets/dataLovers.png";
import mdLinks from "../assets/mdLinks.png";
import burgerQueen from "../assets/burgerQueen.png";
import ScrollAnimation from "react-animate-on-scroll";

export default class ProyectsList extends Component {
  constructor() {
    super();

    this.state = {
      proyect: proyects
    };
  }
  render() {
    return (
      <React.Fragment>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <div className="proyects mt-40">
            <Title name="Proyects" />

            <div className="row mt-30">
              <div className="container">
                <div className="row">
                  <div className="col s12 m6 13">
                    <Proyect
                      img={burgerQueen}
                      name={this.state.proyect[2].name}
                      tools={this.state.proyect[2].tools}
                      enviroment={this.state.proyect[2].enviroment}
                      code={this.state.proyect[2].code}
                      description={this.state.proyect[2].description}
                    />
                  </div>
                  <div className="col s12 m6 13">
                    <Proyect
                      img={cipher}
                      name={this.state.proyect[3].name}
                      tools={this.state.proyect[3].tools}
                      enviroment={this.state.proyect[3].enviroment}
                      code={this.state.proyect[3].code}
                      description={this.state.proyect[3].description}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m6 13">
                    <Proyect
                      img={mdLinks}
                      name={this.state.proyect[4].name}
                      tools={this.state.proyect[4].tools}
                      enviroment={this.state.proyect[4].code}
                      code={this.state.proyect[4].code}
                      description={this.state.proyect[4].description}
                    />
                  </div>
                  <div className="col s12 m6 13">
                    <Proyect
                      img={dataLovers}
                      name={this.state.proyect[5].name}
                      tools={this.state.proyect[5].tools}
                      enviroment={this.state.proyect[5].enviroment}
                      code={this.state.proyect[5].code}
                      description={this.state.proyect[5].description}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </React.Fragment>
    );
  }
}
