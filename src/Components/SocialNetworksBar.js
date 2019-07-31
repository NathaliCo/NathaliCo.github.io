import React, { Component } from "react";

import "./socialNetworksBar.css";
export default class SocialNetworksBar extends Component {
  render() {
    return (
      <div>
        <nav className="socialNetworks">
          <div className="container brackets">
            <a
              className="ancla"
              href="http://github.com/nathaliCo/"
              target="_blank"
              rel = "noopener noreferrer"
            >
              <i className="lni-github-original size-lg" />
            </a>
            <a
              className="ancla"
              href="https://www.linkedin.com/in/martha-nathalie-cortez-chávez/ "
              target="_blank"
              rel = "noopener noreferrer"
            >
              <i className="lni-linkedin-original size-lg" />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
