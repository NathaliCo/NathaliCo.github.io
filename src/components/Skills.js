import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import BottomNavigation from './BottomNavigation'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './skills.css'
const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(bounce, 'bounce')
    },
}
export default class Skills extends Component {
    render() {
        return (
            
                <StyleRoot>
                <React.Fragment>
                <SocialNetworksBar/>
                <section>
                    <div class = "text">
                <h1  style={styles.bounce}>What I do</h1>
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
           
            </StyleRoot>
        )
    }
}
