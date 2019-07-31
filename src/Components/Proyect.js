import React from "react";
import "./proyect.css";

export default function Proyect(props) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={`${props.img}`} alt = "demo"/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          <p>{props.name}</p> <p>{props.tools}</p>
          <i className="material-icons right">more_vert</i>
        </span>
        <p>
          <a className="cardLink" href={`${props.code}`} target="_blank" rel = "noopener noreferrer">
            Code
          </a>
          <a className="cardLink" href={`${props.enviroment}`} target="_blank" rel = "noopener noreferrer">
            Demo
          </a>
        </p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          {props.name}
          <i className="material-icons right">close</i>
        </span>
        <p className="description ">{props.description}</p>
      </div>
    </div>
  );
}
