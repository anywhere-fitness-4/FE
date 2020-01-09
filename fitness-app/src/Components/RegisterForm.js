import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
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

  const StyledInput = (props:any) => {
      return <Input {...props} />
  }

  const Input2 = styled(Field)`
  font-size: 2rem`;

  const Span = styled.span`
  padding-bottom: 5%;`

  return (
      <CenteredDiv>
        <StyledContainer>
            
            <Form>
            <h1>Registration Form</h1>
                <StyledForm>
                <label htmlFor="username">Username:</label>
                <Span/>
                <StyledInput
                    id="username" type="text" name="username" placeholder="choose username"
                />
                {touched.username && errors.username && (
                    <p>{errors.username}</p>
                )}
                <Span/>
                <label htmlFor="password">Password:</label>
                <Span/>
                <Input
                    id="password" type="text" name="password" placeholder="choose password"
                />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                <Span/>
                <label htmlFor ="select">Type of User</label>
                <Span/>
                <Field
                    as="select"
                    name="role_id"
                    type="dropdownlist"
                    >   
                    <option value="role_id">Role ID</option>
                    <option value="1">1 Instructor</option>
                    <option value="2">2 Client</option>
                </Field>
                <Span/>
                <button type="submit">Complete Registration</button>
                <Span/>
                </StyledForm>
            </Form>
        </StyledContainer>
      </CenteredDiv>
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