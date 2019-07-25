import React from 'react'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import './title.css'
const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(bounce, 'bounce')
    },
}
export default function Title(props) {
    return (
        <StyleRoot>
        <div className = "title">
                      <p style={styles.bounce}>{props.name}</p>
        </div>
        </StyleRoot>
        
    )
}
