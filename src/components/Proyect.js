import React from 'react'
import './proyect.css'
{/* <Proyect img={this.state.proyect[0].img} name={this.state.proyect[0].name} tools={this.state.proyect[0].tools} enviroment={this.state.proyect[0].enviroment} code = {this.state.proyect[0].code} /> */}


export default function Proyect (props) {
    return (
       
        <div className="col-md-4 col-sm-6">
                    <div className="box4">
                    <img src={`${props.img}`}/>
                        <div className="box-content">
                        <h3 className="title text-center">{props.name}</h3>
                        <span className="post text-center">{props.tools}</span>
                        <ul className="icon">
                                <li> <a href={`${props.enviroment}`} className="link" alt="to enviroment"><i class="lni-link size-lg"></i> </a> </li>
                                <li> <a href={`${props.code}`} className="link " alt = "to code"><i class="lni-code-alt size-lg"></i> </a> </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    
    )
}
