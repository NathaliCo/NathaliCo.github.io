import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './navigation.css'

export default class Navigation extends Component {
    render() {
        return (
            <section class="navigation">
        <ul>
            <li>
                <a class = "btn" href="https://www.facebook.com/" target="_blanck" ><i class="lni-home "></i></a>
            </li>
            <li>
            <a class = "btn" href="http://www.twitter.com/" target="_blanck"><i class="lni-user"></i></a>
            </li>
            <li>
            <a class = "btn" href="https://www.instagram.com/?hl=es-la" target="_blanck"><i class="lni-code-alt"></i></a>
            </li>
            <li>
            <a class = "btn" href="https://www.hotmail.com" target="_blanck"><i class="lni-folder"></i></a>
            </li>
            <li>
            <a class = "btn" href="https://www.hotmail.com" target="_blanck" ><i class="lni-facebook-messenger lni-burst-effect"></i></a>
            </li>
        </ul>
    </section>
        )
    }
}
