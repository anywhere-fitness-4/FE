import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Link,} from "react-router-dom";

const Div = styled.div`
    background-color: orange;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;
 
const Nav1 = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 50%;` ;  

const Span = styled.span`
    padding-right: 5%;`  
    
const Button = styled.button`
    border: 2px solid white;
    color: orange;
    font-size: 1.5rem;
    text-decoration: none;
    border-radius: 15%;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    `    

export default function Nav () {
    return (
        <Div>
            <Nav1>
                <Button> <Link to ="/"> Home </Link></Button>
                <Button> <Link to ="/register"> Register </Link></Button>
                <Button> <Link to ="/login"> Login </Link> </Button>
                <Button> <Link to ="/classes"> Clients </Link> </Button>
            </Nav1>
        </Div>
    )
}