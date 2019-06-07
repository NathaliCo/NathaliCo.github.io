import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import BottomNavigation from './BottomNavigation'

export default class About extends Component {
    render() {
        return (
            <div>
              <SocialNetworksBar/>
                About
                <BottomNavigation/>
            </div>
        )
    }
}
