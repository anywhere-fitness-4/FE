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

const StyledContainer = styled.div`
  border: 2px solid black;
  text-align: center;
  display: flex;
  justify-content: center;
  width: 50%;
  height: 50%;
  `;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;`;

const CenteredDiv = styled.div`
    display: flex; 
    justify-content: center;`;

  return (
      <CenteredDiv>
        <StyledContainer>
            <Form>
                <StyledForm>
                <label htmlFor="username">Username:</label>
                <Field
                    id="username" type="text" name="username"
                />
                {touched.username && errors.username && (
                    <p>{errors.username}</p>
                )}
                <label htmlFor="password">Password:</label>
                <Field
                    id="password" type="text" name="password"
                />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                <Field
                    as="select"
                    name="role_id"
                    type="dropdownlist"
                    >
                    <option value="role_id">Role ID</option>
                    <option value="1">1 Instructor</option>
                    <option value="2">2 Client</option>
                </Field>
                <button type="submit">Complete Registration</button>
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