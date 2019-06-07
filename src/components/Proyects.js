import React, { Component } from 'react'
import SocialNetworksBar from './SocialNetworksBar'
import BottomNavigation from './BottomNavigation'

export default class Proyects extends Component {
    render() {
        return (
            <div>
                <SocialNetworksBar/>
                Proyects
                <BottomNavigation/>
            </div>
        )
    }
}
