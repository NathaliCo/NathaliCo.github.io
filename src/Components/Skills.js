import React, { Component } from 'react'
import './skills.css'
import Title from './Title';
import { DiHtml5, DiCss3, DiReact, DiJavascript, DiBootstrap, DiNodejs, DiFirebase, DiMongodb, DiGit, DiGithub} from "react-icons/di";
import ScrollAnimation from 'react-animate-on-scroll';

export default class Skills extends Component {
    render() {
        return (
                <React.Fragment>
                    <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
                <section className="skills">
                 
          <Title  name = "What I do"/>
<p className = "subtitle">Front-end</p>
                <span className ="skill"> <i class="devicon-html5-plain-wordmark"></i> <i class="devicon-css3-plain-wordmark"></i> <i class="devicon-javascript-plain"></i> <i class="devicon-react-original-wordmark"></i> <i class="devicon-bootstrap-plain-wordmark"></i> </span>
                <p className = "subtitle">Server</p>
                <span className ="skill"><i class="devicon-nodejs-plain-wordmark"></i> <i class="devicon-express-original-wordmark"></i> </span>
                <p className = "subtitle">Database</p>
                <span className ="skill"><DiFirebase/> <i class="devicon-mongodb-plain-wordmark"></i></span>
<p className = "subtitle">Testing</p>
                <span className ="skill">TDD/Jest</span>
                <p className = "subtitle">Metodologies It and Tools</p>
                <span className ="skill">Agile/scrum/Kanban <i class="devicon-git-plain-wordmark"></i> <i class="devicon-github-plain-wordmark"></i>  <i class="devicon-trello-plain-wordmark"></i></span>
 <p className = "subtitle">Prototiping</p>
                <span className ="skill">Figma</span>    
               
                </section>
                </ScrollAnimation>
                </React.Fragment>
        )
    }
}
