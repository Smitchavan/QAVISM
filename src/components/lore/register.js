import React, { Component } from "react";
import { Formik } from "formik";
import axios from "axios";
import validator from "validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import { registered } from "../../actions/registerAction";
// import { setRegister } from "../../store/slices/registeredSlice";
import { Form, Input, Label, Button, MargD } from "../../style";
import { Navigate } from "react-router-dom";
// import { connect } from "react-redux";
class register extends Component {
  constructor(props) {
    super(props);
    this.init = {
      name: "",
      email: "",
      password: "",
      accesslevel: "",
    };
    this.state = {
      submitted: false,
    };
  }

  validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Name is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (true !== validator.isEmail(values.email)) {
      errors.email = "Enter Valid Email";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    } else if (true === validator.isAlphanumeric(values.password)) {
      errors.password = "Enter Strong Password";
    }
    if (!values.accesslevel) {
      errors.accesslevel = " Accesslevel is Required";
    }
    return errors;
  };
  Postregister = async (values) => {
    //console.log(values);
    try {
      let result = await axios.post(
        "http://localhost:5000/api/register",
        values
      );
      console.log(result);
      toast.success(`User Registered With Email ${result.data.email}`);
    } catch (error) {
      // console.log(error.response.data);
      toast.error(error.response.data);
    }
  };
  handleSubmit = (values, setSubmitting) => {
    // this.props.setRegister(values);
    this.Postregister(values);
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
    setTimeout(() => {
      this.setState({ submitted: true });
    }, 2000);

    // Object.keys(values).forEach((field) => {
    //   setFieldValue(field, "");
    // });
    // this.setState({
    //   name: values,
    // });
    // console.log("payload -", this.state);
  };
  render() {
    let { submitted } = this.state;
    return (
      <div>
        <ToastContainer />
        {submitted === true && <Navigate to="/login" replace={true} />}

        <Formik
          initialValues={this.init}
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
            <Form onSubmit={handleSubmit}>
              <MargD>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <span>{errors.name && touched.name && errors.name}</span>
              </MargD>
              <MargD>
                <Label for="email">Email </Label>
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />{" "}
                <span>{errors.email && touched.email && errors.email}</span>
              </MargD>
              <MargD>
                <Label for="password">Password </Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />{" "}
                <span>
                  {errors.password && touched.password && errors.password}
                </span>
              </MargD>
              <MargD>
                {" "}
                <Label for="accesslevel">Accesslevel :-</Label>
                <select
                  id="Accesslevel"
                  name="accesslevel"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.accesslevel}
                >
                  <option value="">Select</option>
                  <option value="admin">Admin</option>
                  <option value="tester">Tester</option>
                </select>{" "}
                <span>
                  {errors.accesslevel &&
                    touched.accesslevel &&
                    errors.accesslevel}
                </span>
              </MargD>

              <Button type="submit" value="Submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

// const mapDispachToProps = (dispatch) => {
//   return {
//     register: (data) => dispatch(registered(data)),
//   };
// };

// const mapStateToProps = (state) => {
//   console.log("state", state);
// };
// const mapDispachToProps = {
//   setRegister,
// };
// export default connect(mapStateToProps, mapDispachToProps)(register);

export default register;
