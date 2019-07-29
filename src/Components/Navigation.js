import React, { Component } from 'react'
import './navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <section className="navigation">
        <ul>
            <li>
                <a className = "btn" href="#home" ><i className="lni-home "></i></a>
            </li>
            <li>
            <a className = "btn" href="#about"><i className="lni-user"></i></a>
            </li>
            <li>
            <a className = "btn" href="#skills"><i className="lni-code-alt"></i></a>
            </li>
            <li>
            <a className = "btn" href="#proyectsList"><i className="lni-folder"></i></a>
            </li>
            <li>
            <a className = "btn" href="#contact" ><i className="lni-facebook-messenger lni-burst-effect"></i></a>
            </li>
        </ul>
    </section>
        )
    }
}
