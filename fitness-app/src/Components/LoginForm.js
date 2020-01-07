import React, { useState } from "react";
import styled from "styled-components";

const LoginForm = props => {
    const [login, setLogin] = useState({ email: "", password: "" });
  
    const handleChanges = e => {
      setLogin({
        ...login,
        [e.target.name]: e.target.value
      });
      console.log(e.target.name);
    };
  
    const submitForm = e => {
      e.preventDefault();
    //   props.addNewLogin(login);
      console.log(props.addNewLogin)
      setLogin({ email: "", password: "" });
    };

    const StyledContainer = styled.div`
        border: 2px solid black;`;

    const FlexLogin = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;`;
            
  
    return (
      <StyledContainer>  
      <form onSubmit={submitForm}>
        <FlexLogin>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email;"
          onChange={handleChanges}
          name="Email"
          value={login.email}
        />
        <label htmlFor="password">Password</label>
        <textarea
          id="password"
          name="password"
          placeholder="Password;"
          onChange={handleChanges}
          value={login.password}
        />
        <button type="submit">Login</button>
        </FlexLogin>
      </form>
      </StyledContainer>
    );
  };
  
  export default LoginForm;