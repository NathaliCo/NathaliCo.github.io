import React, { Component } from 'react'
import { Link } from "react-router-dom"
import '../App.css'
export default class BottomNavigation extends Component {
    render() {
        return (
            <div>
               <nav className= "navigation">
                <div className="containerNav brackets">               
                   <Link to="/" className= "navIcons"><i className="lni-home "></i></Link>     
                      <Link to="/about" className= "navIcons"><i className="lni-user"></i></Link> 
                      <Link to="/knowledge" className= "navIcons"><i className="lni-code-alt"></i></Link> 
                      <Link to="/proyects" className= "navIcons"><i className="lni-folder"></i></Link> 
                      <Link to="/contact" className= "navIcons"><i className="lni-envelope lni-burst-effect"></i></Link>                   
                      </div>  
        </nav> 
            </div>
        )
    }
}
