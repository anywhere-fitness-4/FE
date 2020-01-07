import React from 'react';
import FormikRegisterForm from '../src/Components/RegisterForm';
import FormikLoginForm from '../src/Components/LoginForm';
import ClassGrid from '../src/Components/ClassGrid';
import styled from "styled-components";
import './App.css';


function App() {

  const SideBySide = styled.div`
  display: flex;`;
  return (
    <SideBySide>
      <h1>Register</h1>
      <FormikRegisterForm/>
      <h1>Login</h1>
      <FormikLoginForm/>
      <h1>
        <ClassGrid/>
      </h1>
    </SideBySide>
  );
}

export default App;
