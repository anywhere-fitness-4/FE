import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import a_f_360 from "../Images/a_f_360.png";

const Login = ({ values, errors, touched, status }) => {
  const [userState, setUserState] = useState([]);

  useEffect(() => {
    status && setUserState(user => [...user, status]);
  }, [status]);

  return (
    <div className="container">
      {status ? (
        <Redirect to={{ pathname: "/instructor-dashboard" }} />
      ) : (
        <>
          <div>
            <Form className="Form">
              <h2 className="Form">Please log in</h2>
              <label>Username:</label>
              <Field className="Input" type="username" name="username" />
              {touched.username && errors.username && <p>{errors.username}</p>}
              <label>Password:</label>
              <Field
                className="Input"
                type="password"
                name="password"
                autoComplete="off"
              />
              {touched.password && errors.password && <p>{errors.password}</p>}
              <button className="PrimaryBtn" type="submit">
                Submit
              </button>
            </Form>
          </div>
        </>
      )}
    </div>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required("No Password Provided.")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://anywhere-fitness04.herokuapp.com/api/auth/login", values)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        setStatus(response.data);
        let isLoggedIn = true;
      })
      .catch(err => console.log(err.response));
    resetForm();
  }
})(Login);

export default FormikLogin;
