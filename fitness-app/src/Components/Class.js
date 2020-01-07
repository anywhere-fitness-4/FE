import React from "react";
import styled from "styled-components";

const Class = props => {
    return ( 
        <div>
            <h1>Name: {props.name}</h1>
            <p>Type: {props.type}</p>
            <p>Date: {props.Date}</p>
            <p>Intensity: {props.intensity}</p>
        </div>
    )
  };
  
  export default Class;