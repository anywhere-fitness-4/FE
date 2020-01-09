import React from 'react';
import { withFormik, Form, Field } from "formik";
import FormikRegisterForm from '../src/Components/RegisterForm';
import FormikLoginForm from '../src/Components/LoginForm';
import ClassGrid from '../src/Components/ClassGrid';
import Nav from '../src/Components/Nav';
import Home from '../src/Components/Home';
import {Route} from 'react-router-dom';
import styled from "styled-components";
import './App.css';

//classes styles
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: orange;`;

const TeamDiv = styled.div`
  background-color: orange;`; 

const StyledHeader = styled.h1`
  color: white;
  font-size: 3rem;
  `;  

  const StyledPar = styled.p`
  color: white;
  font-size: 1.5rem;
  `;  

function App() {

  const SideBySide = styled.div`
  display: flex;`;
  return (
    <main>
      <Nav/>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route exact path = "/register">
        <FormikRegisterForm/>
      </Route>
      <Route exact path = "/login">
      <FormikLoginForm/>
      </Route>
      <Route exact path = "/classes">
        <Div>
          <StyledHeader>Professional Affilliations</StyledHeader>
          <StyledPar>Below are professional sports teams who have used Anywhere Fitness classes to help their performance.</StyledPar>
        </Div>
        <TeamDiv>
          <ClassGrid/>
        </TeamDiv>
      </Route>
      
    </main>
  );
}

export default App;
