import React from 'react'
import './proyect.css'
{/* <Proyect img={this.state.proyect[0].img} name={this.state.proyect[0].name} tools={this.state.proyect[0].tools} enviroment={this.state.proyect[0].enviroment} code = {this.state.proyect[0].code} /> */}


export default function Proyect (props) {
    return (

<div class="card">
   <img class="card-img-top" src={`${props.img}`} alt="demo"/>
   <div class="card-body">
      <h5 class="card-title border-bottom pb-3">{props.name} <a href={"#"/*`${props.enviroment}`*/}  alt = "to code" class="float-right btn btn-sm btn-info d-inline-flex share"><i class="lni-link"></i></a></h5>
      <span class="card-text">{props.tools}</span>
      <a href={`${props.code}`} class="btn btn-sm btn-info float-right" alt="to demo">Demo </a>
   </div>
</div>
             
    )
}
