import React from "react";
import "./title.css";

export default function Title(props) {
  return (
    <div className="title">
      <p>{props.name}</p>
    </div>
  );
}
