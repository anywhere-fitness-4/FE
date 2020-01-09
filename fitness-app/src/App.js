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

//registration styles
const CenteredDiv = styled.div`
display: flex; 
justify-content: center;
padding-top: 10%;`;

const StyledContainer = styled.div`
border: 2px solid black;
text-align: center;
display: flex;
justify-content: center;
width: 50%;
background-color: orange;
`;

const StyledForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const Input = styled(Field)`
color: FF6A22;
font-size: 2rem
`;

const Span = styled.span`
padding-bottom: 5%;`;

//classes styles
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;`;

const TeamDiv = styled.div`
  background-color: orange;`  

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
          <h1>Professional Affilliations</h1>
          <p>Below are professional sports teams who have used Anywhere Fitness classes to help their performance.</p>
        </Div>
        <TeamDiv>
          <ClassGrid/>
        </TeamDiv>
      </Route>
      
    </main>
  );
}

export default App;
