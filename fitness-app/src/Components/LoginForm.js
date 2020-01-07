import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm =({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("status has changed", status);
        status && setUsers(users => [...users, status]);
      }, [status]);

    // const StyledContainer = styled.div`
    //     border: 2px solid black;`;

    // const FlexLogin = styled.div`
    //     display: flex;
    //     flex-direction: column;
    //     align-items: center;`;
            
    return (
      <div>  
        <Form>
            <label htmlFor="username">Username:</label>
            <Field
                id="username" type="text" name="username"
            />
            {touched.username && errors.username && (
                <p>{errors.username}</p>
            )}
            <label htmlFor="password">Password</label>
            <Field
                id="password" type="text" name="password"
            />
            {touched.password && errors.password && (
                <p>{errors.password}</p>
            )}
            <button type="submit">Login</button>
        </Form>
      </div>
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
     