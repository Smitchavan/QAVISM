import React, { Component } from "react";
import { Formik } from "formik";
import { Form, Input, Label, Button, MargD, Dom } from "../../style";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class login extends Component {
  constructor(props) {
    super(props);

    this.initialValues = { email: "", password: "" };
    this.state = {
      user: null,
      isLoggedIn: false,
    };
  }

  componentDidMount() {}
  postlogin = async (values) => {
    console.log(values);
    try {
      let result = await axios.post("http://localhost:5000/api/login", values);
      console.log("Result->", result);
      console.log("Result->", result.data);

      if (result.data.token) {
        localStorage.setItem("token", JSON.stringify(result.data.token));
      }

      if (result.status === 200) {
        this.setState({
          user: result.data.user,
          isLoggedIn: true,
        });
        toast.success(result.data.msg);
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    }

    return errors;
  };
  handleSubmit = (values, setSubmitting) => {
    this.postlogin(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };
  render() {
    return (
      <div>
        <div>
          <center>
            <h2>Login Page</h2>
          </center>
        </div>
        {this.state.user && (
          <Navigate to="/home" replace={this.state.isLoggedIn} />
        )}
        <ToastContainer />{" "}
        <Formik
          initialValues={this.initialValues}
          validate={(values) => this.validate(values)}
          onSubmit={(values, { setSubmitting }) =>
            this.handleSubmit(values, setSubmitting)
          }
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit} class="login-box">
              <MargD>
                <Label for="name">Email</Label>
                <Input
                  type="text"
                  id="name"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />{" "}
                <span>{errors.email && touched.email && errors.email}</span>
              </MargD>
              <MargD class="user-box">
                <Label for="password">Password </Label>
                <Input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <span>
                  {errors.password && touched.password && errors.password}
                </span>
              </MargD>
              <Button type="submit" value="Submit" disabled={isSubmitting}>
                Submit
              </Button>
              <Dom>
                <Link to="/forgotPassword">Forgot Password?</Link>
              </Dom>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

// <div >
//   <h2>Login</h2>
//   <form>
//     <div >
//       <input type="text" name="" required="">
//       <label>Username</label>
//     </div>
//     <div class="user-box">
//       <input type="password" name="" required="">
//       <label>Password</label>
//     </div>
//     <a href="#">
//       <span></span>
//       <span></span>
//       <span></span>
//       <span></span>
//       Submit
//     </a>
//   </form>
// </div>
