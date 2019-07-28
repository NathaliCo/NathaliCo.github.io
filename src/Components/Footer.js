import React, { Component } from 'react';
import './footer.css';
import { DiMaterializecss} from "react-icons/di";

export default class Navigation extends Component {
    render() {
        return (
            <section className="bottom">
                <p> Built With </p>
                <div className = "tools">
                <i class="devicon-html5-plain-wordmark"></i>
                <i class="devicon-react-original-wordmark"></i>
                <i class="devicon-css3-plain-wordmark"></i>
                <DiMaterializecss/>
                <i class="devicon-sass-original"></i>
                </div>
                Nathalie, Julio 2019
            </section>
        )
    }
}
