import React from 'react'
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
    bounce: {
      animation: 'x 2s',
      animationName: Radium.keyframes(bounce, 'bounce')
    },
}
export default function Title(props) {
    return (
        <StyleRoot>
        <div>
                      <h1 className="nf-r2 " style={styles.bounce}>{props.name}</h1>
        </div>
        </StyleRoot>
        
    )
}
