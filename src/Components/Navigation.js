import React, { Component } from 'react'
import './navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <section class="navigation">
        <ul>
            <li>
                <a class = "btn" href="#home" ><i class="lni-home "></i></a>
            </li>
            <li>
            <a class = "btn" href="#about"><i class="lni-user"></i></a>
            </li>
            <li>
            <a class = "btn" href="#skills"><i class="lni-code-alt"></i></a>
            </li>
            <li>
            <a class = "btn" href="#proyectsList"><i class="lni-folder"></i></a>
            </li>
            <li>
            <a class = "btn" href="#contact" ><i class="lni-facebook-messenger lni-burst-effect"></i></a>
            </li>
        </ul>
    </section>
        )
    }
}
