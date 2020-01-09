import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import {CenteredDiv1, StyledContainer1, Span1, Input1, StyledForm1} from "./StyledRegister";
import * as Yup from "yup";
import axios from "axios";

const LoginForm =({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("status has changed", status);
        status && setUsers(users => [...users, status]);
      }, [status]);

      const CenteredDiv = styled.div`
      display: flex; 
      justify-content: center;
      padding-top: 10%;`;
      
      const StyledContainer = styled.div`
        border: px solid black;
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
        font-size: 2rem`;
      
        const Input2 = styled(Field)`
        font-size: 2rem`;
      
        const Span = styled.span`
        padding-bottom: 5%;`
            
    return (
      <CenteredDiv1>
        <StyledContainer1>
          <Form>
            <h1>Login Form</h1>
            <StyledForm1>
              <label htmlFor="username">Username:</label>
              <Span1/>
              <Input1
                  id="username" type="text" name="username" placeholder="username"
              />
              {touched.username && errors.username && (
                  <p>{errors.username}</p>
              )}
              <Span1/>
              <label htmlFor="password">Password</label>
              <Span1/>
              <Input1
                  id="password" type="text" name="password" placeholder="password"
              />
              {touched.password && errors.password && (
                  <p>{errors.password}</p>
              )}
              <Span1/>
              <button type="submit">Login</button>
              <Span1/>
            </StyledForm1>
          </Form>
        </StyledContainer1>  
      </CenteredDiv1>
    );
  };
  
  const FormikLoginForm = withFormik ({
    mapPropsToValues({username, password }) {
        return {
            username: username || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Is Required"),
        password: Yup.string().required("Is Required"),
      }),
      handleSubmit(values, { setStatus, resetForm }) {
        console.log("submitting", values);
        axios
          .post("https://anywhere-fitness04.herokuapp.com/api/auth/login", values)
          .then(res => {
            console.log("success", res);
            setStatus(res.data);
            resetForm();
          })
          .catch(err => console.log(err.response));
      }
      
}) (LoginForm)

export default FormikLoginForm;
     