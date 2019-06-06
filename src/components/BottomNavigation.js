import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './navigation.css'
export default class BottomNavigation extends Component {
    render() {
        return (
            <div>
               <nav className= "navigation">
                <div className="containerNav brackets">               
                   <Link to="/"><a className= "navIcons"><i className="lni-home "></i></a></Link>     
                      <Link to="/about"> <a className= "navIcons"><i className="lni-user"></i></a></Link> 
                      <Link to="/knowledge">  <a className= "navIcons"><i className="lni-code-alt"></i></a></Link> 
                      <Link to="/proyects"> <a className= "navIcons"><i className="lni-folder"></i></a></Link> 
                      <Link to="/contact"> <a className= "navIcons"><i className="lni-envelope lni-burst-effect"></i></a>     </Link>                   
                      </div>  
        </nav> 
            </div>
        )
    }
}
