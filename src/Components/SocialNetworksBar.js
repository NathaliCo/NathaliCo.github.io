import React, { Component } from 'react'

import './socialNetworksBar.css'
export default class SocialNetworksBar extends Component {
    render() {
        return (
            <div>
                 <nav className = "socialNetworks">
                <div className="container brackets">
                        <a href = "http://github.com/nathaliCo/"><i className="lni-github-original size-lg"></i></a>
                        <a href = "https://www.linkedin.com/in/martha-nathalie-cortez-ch%C3%A1vez/"><i className="lni-linkedin-original size-lg"></i></a>
                      </div>
        </nav>
            </div>
        )
    }
}
