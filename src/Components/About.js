import React, { Component } from 'react'
import Title from './Title';
import './about.css';
import resume from '../assets/Martha Nathalie Cortez Chávez (Front-end).pdf'
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
  
    render() {
        
        return (
            <React.Fragment>
              
                <section className= "about">
              <Title  name = "ABOUT ME"/>
              <ScrollAnimation animateIn='fadeIn'
  animateOut='fadeOut'>
                <span className= "descriptionAbout">Front-end developer, antropologist and Musician. One of my favorite activities, besides literature, is to learn new things, which is why I decided to enter to the tech world. My long-term goal is to be able to generate social change through my code. I am interested in being updated on new technologies, so I look for a place where I can continue developing my skills and abilities as a web developer. Although my first approach with the programming has been in front end, I would like later to learn about back-end technologies. </span>
                <div className= "resume"id={'resume-pdf'}>My resume here! view/download it in <a
                    href={"#"}>English</a> and <a href={resume}>Spanish</a></div>
                    <i class="lni-book"></i>
                    <i class="lni-music"></i>
                    <i class="material-icons right">pets</i> 
                    </ScrollAnimation>
                    </section>
                
            </React.Fragment>
        )
    }
}
