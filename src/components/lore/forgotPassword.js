import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import { Form, Input, Label, Button, MargD, Dom } from "../../style";
import axios from "axios";
import { Link } from "react-router-dom";
export default class forgotPassword extends Component {
  constructor(props) {
    super(props);
    this.initialValues = { email: "", password: "" };
  }
  componentDidMount() {}
  forgotPassword = (values) => {
    console.log(values);
    // let result = await axios.post("http://localhost:5000/api/login", values);

    // console.log(result.data);
    axios
      .post("http://localhost:5000/api/forgotPassword", values)
      .then((res) => toast.success(res.data));
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
    this.forgotPassword(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };
  render() {
    return (
      <div>
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
                <center>PLEASE RESET YOUR PASSWORD</center>
              </MargD>{" "}
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
                <Link to="/login">Login Page</Link>
              </Dom>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
