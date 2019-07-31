import React, { Component } from "react";
import "./footer.css";
import { DiMaterializecss } from "react-icons/di";

export default class Navigation extends Component {
  render() {
    return (
      <section className="bottom">
        <p> Built With </p>
        <div className="tools">
          <i className="devicon-html5-plain-wordmark" />
          <i className="devicon-react-original-wordmark" />
          <i className="devicon-css3-plain-wordmark" />
          <DiMaterializecss />
          <i className="devicon-sass-original" />
        </div>
        <p>Nathalie, Julio 2019</p>
      </section>
    );
  }
}
