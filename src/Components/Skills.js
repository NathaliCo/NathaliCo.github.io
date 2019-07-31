import React, { Component } from "react";
import "./skills.css";
import Title from "./Title";
import {
  DiMaterializecss,
  DiFirebase,
} from "react-icons/di";
import ScrollAnimation from "react-animate-on-scroll";

export default class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
          <section className="skills">
            <Title name="What I do" />
            <p className="subtitles">Front-end</p>
            <div className="container">
              <div className="row">
                <div className="col s12">
                  <span className="skillIcon">
                    <i className="devicon-html5-plain-wordmark" />{" "}
                    <i className="devicon-css3-plain-wordmark" />{" "}
                    <i className="devicon-javascript-plain" />{" "}
                    <i className="devicon-react-original-wordmark" />{" "}
                    <i className="devicon-bootstrap-plain-wordmark" />{" "}
                    <DiMaterializecss />
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 13">
                  <p className="subtitles">Server</p>
                  <span className="skillIcon">
                    <i className="devicon-nodejs-plain-wordmark" />{" "}
                    <i className="devicon-express-original-wordmark" />
                  </span>
                </div>

                <div className="col s12 m6 13">
                  <p className="subtitles">Database</p>
                  <span className="skillIcon">
                    <DiFirebase />
                    <i className="devicon-mongodb-plain-wordmark" />
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 13">
                  <p className="subtitles">Testing</p>
                  <span className="skill">TDD/Jest</span>
                </div>
                <div className="col s12 m6 13">
                  <p className="subtitles">Metodologies It</p>
                  <span className="skill">Agile/Scrum/Kanban</span>
                </div>
              </div>
              <div className="row">
                <div className="col s12 m6 13">
                  <p className="subtitles"> Tools</p>
                  <span className="skillIcon">
                    <i className="devicon-git-plain-wordmark" />{" "}
                    <i className="devicon-github-plain-wordmark" />{" "}
                    <i className="devicon-trello-plain-wordmark" />
                  </span>
                </div>
                <div className="col s12 m6 13">
                  <p className="subtitles">Prototyping</p>
                  <span className="skill">Figma</span>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </React.Fragment>
    );
  }
}
