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
                <span>HTML5/CSS3, Vanilla JS/ES6, React.JS, Bootstrap</span>
                <p>Back-end</p>
                <span>NodeJS, ExpressJS</span>
                <p>Cloud</p>
                <span>Firebase, MongoDB</span>
                <p>Testing</p>
                <span>TDD/Jest</span>
                <p>Metodologies It and Tools</p>
                <span>Agile/scrum/Kanban, Git/GitHub</span>
                <p>Prototiping</p>
                <span>Figma</span>
                <BottomNavigation/>
                </div>
                </section>
                </React.Fragment>
        )
    }
}
