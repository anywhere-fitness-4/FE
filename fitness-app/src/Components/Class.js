import React from "react";
import styled from "styled-components";

const StyledOutterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

const StyledContainer = styled.div`
border: 2px solid black;
width: 33%;
margin: 5%;
display: flex;
flex-direction: column;
align-items: center;`;

const Class = props => {
    return ( 
        <StyledOutterContainer>
            <StyledContainer>
                <h1>Name: {props.name}</h1>
                <p>City: {props.city}</p>
                <p>Abbreviation: {props.abbreviation}</p>
            </StyledContainer>
        </StyledOutterContainer>
    )
  };
  
  export default Class;