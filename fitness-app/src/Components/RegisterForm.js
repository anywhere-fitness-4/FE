import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import {CenteredDiv1, StyledContainer1, Span1, Input1, StyledForm1} from "./StyledRegister";
import * as Yup from "yup";
import axios from "axios";

const RegisterForm =({values, errors, touched, status}) => {
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

  return (
      <CenteredDiv1>
        <StyledContainer1>           
            <Form>
            <h1>Registration Form</h1>
                <StyledForm1>
                    <label htmlFor="username">Username:</label>
                    <Span1/>
                    <Input1
                        id="username" type="text" name="username" placeholder="choose username"
                    />
                    {touched.username && errors.username && (
                        <p>{errors.username}</p>
                    )}
                    <Span1/>
                    <label htmlFor="password">Password:</label>
                    <Span1/>
                    <Input1
                        id="password" type="text" name="password" placeholder="choose password"
                    />
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}
                    <Span1/>
                    <label htmlFor ="select">Type of User:</label>
                    <Span1/>
                    <Field
                        as="select"
                        name="role_id"
                        type="dropdownlist"
                        >   
                        <option value="role_id">Role ID</option>
                        <option value="1">1 Instructor</option>
                        <option value="2">2 Client</option>
                    </Field>
                    <Span1/>
                    <button type="submit">Complete Registration</button>
                    <Span1/>
                </StyledForm1>
            </Form>
        </StyledContainer1>
    </CenteredDiv1>
  );
};

const FormikRegisterForm = withFormik ({
    mapPropsToValues({username, password, role_id }) {
        return {
            username: username || "",
            password: password || "",
            role_id: role_id,
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Is Required"),
        password: Yup.string().required("Is Required"),
        role_id: Yup.string()
            .oneOf(["1", "2",])
            .required("Please choose a role"),
      }),
      handleSubmit(values, { setStatus, resetForm }) {
        console.log("submitting", values);
        axios
          .post("https://anywhere-fitness04.herokuapp.com/api/auth/register", values)
          .then(res => {
            console.log("success", res);
            setStatus(res.data);
            resetForm();
          })
          .catch(err => console.log(err.response));
      }
      
}) (RegisterForm)

export default FormikRegisterForm;