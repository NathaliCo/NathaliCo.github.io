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
                <span>CSS3, Javascript, ES6, React, Bootstrap</span>
                <p>Back-end</p>
                <span>NodeJs</span>
                <p>Cloud</p>
                <span>Firebase</span>
                <p>Metodologies It</p>
                <span>Agile/scrum</span>
                <p>Prototiping</p>
                <span>Figma</span>
                <BottomNavigation/>
                </div>
                </section>
                </React.Fragment>
        )
    }
}
