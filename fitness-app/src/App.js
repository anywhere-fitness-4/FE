import React from 'react';
import RegisterForm from '../src/Components/RegisterForm';
import LoginForm from '../src/Components/LoginForm';
import styled from "styled-components";
import './App.css';


function App() {

  const SideBySide = styled.div`
  display: flex;`;
  return (
    <SideBySide>
      <h1>Register</h1>
      <RegisterForm/>
      <h1>Login</h1>
      <LoginForm/>
    </SideBySide>
  );
}

export default App;
