import React, { Component } from 'react'
import Home from './Home';
import ModalPage from './ModalPage'

import '../App.css';

export default class HomePage extends Component {
    
	
	
		render(){
        return (
            <React.Fragment>
            <ModalPage/>
           <Home/>
           </React.Fragment>
        )
    }
}
