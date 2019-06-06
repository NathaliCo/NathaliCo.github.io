import React, { Component } from 'react'
import './navigation.css'
export default class SocialNetworksBar extends Component {
    render() {
        return (
            <div>
                 <nav className = "socialNetworks">
                <div className="container brackets">
                        <a><i className="lni-github-original "></i></a>
                        <a><i className="lni-linkedin-original"></i></a>
                      </div>
        </nav>
            </div>
        )
    }
}
