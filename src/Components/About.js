import React, { Component } from 'react'
import Title from './Title';
import './about.css';
import resume from '../assets/Martha Nathalie Cortez Chávez (Front-end).pdf'
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
  
    render() {
        
        return (
            <React.Fragment>
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
      <section className= "about">
              <Title  name = "About me"/>
                <span className= "descriptionAbout">Front-end developer, antropologist and Musician. One of my favorite activities, besides literature, is to learn new things, which is why I decided to enter to the tech world. My long-term goal is to be able to generate social change through my code. I am interested in being updated on new technologies, so I look for a place where I can continue developing my skills and abilities as a web developer. Although my first approach with the programming has been in front end, I would like later to learn about back-end technologies. </span>
                <p className= "resume"id={'resume-pdf'}>My resume here! view/download it in <a
                    href={"#"}>English</a> and <a href={resume} target="_blank">Spanish</a></p> 
                     </section>                  
                    </ScrollAnimation>
                   
                
            </React.Fragment>
        )
    }
}
