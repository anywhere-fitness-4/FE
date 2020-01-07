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

// const StyledContainer = styled.div`
//   border: 2px solid black;`;

// const FlexRegister = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;`;

  return (
      <div>
        <Form>
            <label htmlFor="firstName">First Name:</label>
            <Field
                id="firstName" type="text" name="firstName"
            />
            <label htmlFor="lastName">Last Name:</label>
            <Field
                id="lastName" type="text" name="lastName"
            />
            <label htmlFor="email">Email:</label>
            <Field
                id="email" type="text" name="email"
            />
            <label htmlFor="phone">Phone:</label>
            <Field
                id="phone" type="text" name="phone"
            />
            <label htmlFor="password">Password:</label>
            <Field
                id="password" type="text" name="password"
            />
            <label htmlFor="age">Age:</label>
            <Field
                id="age" type="text" name="age"
            />
            <button type="submit">Complete Registration</button>
        </Form>
      </div>
  );
};

const FormikRegisterForm = withFormik ({
    mapPropsToValues({firstName, lastName, email, phone, password, age, }) {
        return {
            firstName: firstName || "",
            lastName: lastName || "",
            email: email || "",
            phone: phone || "",
            password: password || "",
            age: age || "",
        }
    }
})

export default RegisterForm;