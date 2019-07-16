import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import BottomNavigation from './BottomNavigation'
import Title from './Title';
import './about.css'

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
              <SocialNetworksBar/>
              
              <Title  name = "About me"/>
                
                <span className= "descriptionAbout">Front-end developer, antropologist and Musician. One of my favorite activities, besides literature, is to learn new things, which is why I decided to enter to the tech world. My long-term goal is to be able to generate social change through my code. I am interested in being updated on new technologies, so I look for a place where I can continue developing my skills and abilities as a web developer. Although my first approach with the programming has been in front end, I would like later to learn about back-end technologies. </span>
                <span></span>
                <a href="../assets/Martha Nathalie Cortez Chávez (Front-end).pdf" download="Martha Nathalie Cortez Chávez (Front-end)">
                Download CV
                </a>
              
                <BottomNavigation/>
            </React.Fragment>
        )
    }
}
