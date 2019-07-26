import React from 'react'
import './proyect.css'
{/* <Proyect img={this.state.proyect[0].img} name={this.state.proyect[0].name} tools={this.state.proyect[0].tools} enviroment={this.state.proyect[0].enviroment} code = {this.state.proyect[0].code} /> */}


export default function Proyect (props) {
    return (    
  <div class="card">
  <div class="card-image waves-effect waves-block waves-light">
    <img class="activator" src={`${props.img}`}/>
  </div>
  <div class="card-content">
    <span class="card-title activator grey-text text-darken-4"><p>{props.name}</p> <p>{props.tools}</p><i class="material-icons right">more_vert</i></span>
    <p><a href={`${props.code}`} target="_blank">Code</a></p>
    <p><a href={`${props.enviroment}`} target="_blank">Demo</a></p>
  </div>
  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">{props.name}<i class="material-icons right">close</i></span>
    <p>{props.description}</p>
  </div>
</div>
       
    )
}
