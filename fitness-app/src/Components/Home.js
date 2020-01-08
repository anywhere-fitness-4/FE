import React from "react";
import styled from "styled-components";

const StyledHeader = styled.h1`
color: #FF6A22
text-align: center;
`;

export default function Home () {
    return (
        <StyledHeader>
            <img src = "Af.png"/>
            Welcome to the Anywhere Fitness App!
        </StyledHeader>
        
    )
}