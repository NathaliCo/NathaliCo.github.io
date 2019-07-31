import React, { Component } from "react";
import "./home.css";
import ScrollAnimation from "react-animate-on-scroll";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <section className="home">
            <div className="name">Nathalie Cortez</div>
            <div className="subtitle">
              {" "}
              Front end Developer + Antropologist + Musician{" "}
            </div>
            <button className="toForm btn waves-effect waves-light">
              <a className="toContact" href="#contact">
                Let's talk
                <i className="material-icons right">send</i>
              </a>
            </button>
          </section>
        </ScrollAnimation>
      </React.Fragment>
    );
  }
}
