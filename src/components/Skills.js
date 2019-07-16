import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import BottomNavigation from './BottomNavigation'
import './skills.css'
import Title from './Title';

export default class Skills extends Component {
    render() {
        return (
                <React.Fragment>
                <SocialNetworksBar/>
                <section>
                    <div class = "text">
          <Title  name = "What I do"/>
                <p>Front-end</p>
                <span className ="skill">HTML5/CSS3, JS/ES6, React.JS, Bootstrap</span>
                <p>Back-end</p>
                <span className ="skill">NodeJS, ExpressJS</span>
                <p>Cloud</p>
                <span className ="skill">Firebase, MongoDB</span>
                <p>Testing</p>
                <span className ="skill">TDD/Jest</span>
                <p>Metodologies It and Tools</p>
                <span className ="skill">Agile/scrum/Kanban, Git/GitHub</span>
                <p>Prototiping</p>
                <span className ="skill">Figma</span>
                <BottomNavigation/>
                </div>
                </section>
                </React.Fragment>
        )
    }
}
