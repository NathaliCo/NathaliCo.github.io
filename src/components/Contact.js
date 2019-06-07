import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import BottomNavigation from './BottomNavigation'

export default class Contact extends Component {
    render() {
        return (
            <div>
               <SocialNetworksBar/>
                Contact
                <BottomNavigation/>
            </div>
        )
    }
}
