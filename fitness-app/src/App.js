import React from 'react';
import FormikRegisterForm from '../src/Components/RegisterForm';
import FormikLoginForm from '../src/Components/LoginForm';
import ClassGrid from '../src/Components/ClassGrid';
import Nav from '../src/Components/Nav';
import Home from '../src/Components/Home';
import {Route} from 'react-router-dom';
import styled from "styled-components";
import './App.css';


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
        <ClassGrid/>
      </Route>
      
    </main>
  );
}

export default App;
