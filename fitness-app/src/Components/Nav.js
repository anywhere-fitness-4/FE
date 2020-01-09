import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Link,} from "react-router-dom";

const Div = styled.div`
    background-color: orange;
    height: 50px;
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
    font-size: 1.4rem;
    text-decoration: none;
    border-radius: 15%;
    `    

export default function Nav () {
    return (
        <Div>
            <Nav1>
                <Button> <Link to ="/"> Home </Link></Button>
                <Button> <Link to ="/register"> Register </Link></Button>
                <Button> <Link to ="/login"> Login </Link> </Button>
                <Button> <Link to ="/classes"> Classes </Link> </Button>
            </Nav1>
        </Div>
    )
}