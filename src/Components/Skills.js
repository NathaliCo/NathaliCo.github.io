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

<p className = "subtitles">Front-end</p>
                <span className ="skillIcon"> 
                <i className="devicon-html5-plain-wordmark"></i>  <i className="devicon-css3-plain-wordmark"></i>  <i className="devicon-javascript-plain"></i>  <i className="devicon-react-original-wordmark"></i>  <i className="devicon-bootstrap-plain-wordmark"></i> 
                </span>
<p className = "subtitles">Server</p>
                <span className ="skillIcon">
                    <i className="devicon-nodejs-plain-wordmark"></i> <i className="devicon-express-original-wordmark"></i> 
                    </span>
<p className = "subtitles">Database</p>
                <span className ="skillIcon"><DiFirebase/> 
                <i className="devicon-mongodb-plain-wordmark"></i>
                </span>
<p className = "subtitles">Testing</p>
                <span className ="skill">TDD/Jest</span>
<p className = "subtitles">Metodologies It</p>
<span className = "skill">Agile/Scrum/Kanban</span>
<p className = "subtitles"> Tools</p>
                <span className ="skillIcon"> 
                <i className="devicon-git-plain-wordmark"></i>  <i className="devicon-github-plain-wordmark"></i>  <i className="devicon-trello-plain-wordmark"></i>
                </span>
 <p className = "subtitles">Prototyping</p>
                <span className ="skill">Figma</span>    
                </section>
                </ScrollAnimation>
                </React.Fragment>
        )
    }
}
