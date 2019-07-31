import React, { Component } from "react";
import "./navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <section className="navigation">
        <ul>
          <li>
            <a className="btn" href="#home">
              <i className="lni-home " />
            </a>
          </li>
          <li>
            <a className="btn" href="#about">
              <i className="lni-user" />
            </a>
          </li>
          <li>
            <a className="btn" href="#skills">
              <i className="lni-code-alt" />
            </a>
          </li>
          <li>
            <a className="btn" href="#proyectsList">
              <i className="lni-folder" />
            </a>
          </li>
          <li>
            <a className="btn" href="#contact">
              <i className="lni-facebook-messenger lni-burst-effect" />
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
