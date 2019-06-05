import React, { Component } from 'react'

export default class BottomNavigation extends Component {
    render() {
        return (
            <div>
               <nav className= "navigation">
                <div className="containerNav brackets">
                
                        <a className= "navIcons"><i className="lni-home "></i></a>
                        <a className= "navIcons"><i className="lni-user"></i></a>
                        <a className= "navIcons"><i className="lni-code-alt"></i></a>
                        <a className= "navIcons"><i className="lni-folder"></i></a>
                        <a className= "navIcons"><i className="lni-envelope lni-burst-effect"></i></a>
                        
                      </div>
                    
        </nav> 
            </div>
        )
    }
}
