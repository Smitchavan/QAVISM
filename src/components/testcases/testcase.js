import React, { Component } from "react";
import withNavigateHook from "../../useNav";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  TestForm,
  TestInput,
  TestButton,
  TestDiv,
  TestSelect,
  MargD,
  OL,
  LI,
  Absolute,
} from "../../style";

class testcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testname: "",
      steps: "",
      status: "",
      testlevel: "",
      assigntoproject: "",
      stepArr: [],
    };
    this.handlechange = this.handlechange.bind(this);
  }
  componentDidMount() {
    this.getStep();
  }

  handlestep = async (e) => {
    if (this.state.steps === "") {
      alert("please Fill Values");
    } else {
      let val = { steps: this.state.steps };
      try {
        let result = await axios.post("http://localhost:5000/api/step", val);
        console.log("postresult", result.data);
        if (result.data.err) {
          console.log(result.data.err);
        }
        // console.log("result", result.data);
      } catch (error) {
        console.log("check Error");
      }

      this.empty();
    }
  };
  getStep = () => {
    axios
      .get("http://localhost:5000/api/step/getstep")
      .then((resulto) => {
        //console.log(resulto.data);
        this.setState({ stepArr: resulto.data });
      })
      .catch((err) => console.log(err));

    //  const gotresult = resulto.data;

    // this.setState({ stepArr: gotresult });
    // this.state.stepArr = gotresult;

    // if (resulto.data.err) {
    //   console.log(resulto.data.err);
    // }
    // console.log("result", result.data);
  };
  empty = () => {
    document.getElementById("steps").value = "";
  };
  handlechange = async (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  deletestep = (id) => {
    axios.delete("http://localhost:5000/api/step/deletestep", {
      data: { id: id },
    });
    this.refreshPage();
  };

  refreshPage() {
    window.location.reload(false);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.steps === []) {
      alert("please Fill Values");
    } else {
    }
    let values = this.state;
    // console.log("submit->", values);
    try {
      let result = await axios.post(
        "http://localhost:5000/api/testcase",
        values
      );

      console.log("result", result.data.status);
      if (result.status === 200) {
        toast.success("Test Case Uploaded Successfully");
      }

      this.setState({
        testname: "",
        steps: "",
        status: "",
        testlevel: "",
        assigntoproject: "",
      });
      if (result.data.err) {
        console.log(result);
        toast.error(result.data.err);
      }
      // console.log("result", result.data);
    } catch (error) {
      toast.error("Duplicate key for Test name");
    }
  };
  render() {
    return (
      <div>
        <ToastContainer />{" "}
        <div>
          <TestForm>
            {" "}
            <label>Add Steps</label>
            <TestInput
              type="text"
              id="steps"
              name="steps"
              value={this.state.steps}
              onChange={this.handlechange}
            ></TestInput>
            <TestButton onClick={this.handlestep}>
              <h1>Add Step</h1>
            </TestButton>
            <label>Test Case Name</label>
            <TestInput
              type="text"
              id="testname"
              name="testname"
              value={this.state.testname}
              onChange={this.handlechange}
            ></TestInput>
            <MargD></MargD>
            <center>
              <div>
                {" "}
                <TestDiv>
                  Add Status
                  <TestSelect
                    id="AddStatus"
                    name="status"
                    value={this.state.status}
                    onChange={this.handlechange}
                  >
                    <option value="">Select</option>
                    <option value="Started">Started</option>
                    <option value="Completed">Completed</option>
                  </TestSelect>
                </TestDiv>
              </div>

              <TestDiv>
                Test Severity
                <TestSelect
                  id="testlevel"
                  name="testlevel"
                  value={this.state.testlevel}
                  onChange={this.handlechange}
                >
                  <option value="">Select</option>
                  <option value="High">High</option>
                  <option value="Low">Low</option>
                </TestSelect>
              </TestDiv>

              <TestDiv>
                Assign to TestSet
                <TestSelect
                  id="assignProject"
                  name="assigntoproject"
                  value={this.state.assigntoproject}
                  onChange={this.handlechange}
                >
                  <option value="">Select</option>
                  <option value="emtity">emtity</option>
                </TestSelect>
              </TestDiv>
              <span></span>
            </center>
            <TestButton onClick={this.handleSubmit}>
              <h1>Add Test Case</h1>
            </TestButton>
          </TestForm>
        </div>
        <Absolute>
          {this.state.stepArr.map((value) => (
            <OL>
              <LI>
                <div
                  key={value._id}
                  onClick={() => {
                    this.deletestep(value._id);
                  }}
                >
                  {value.steps}
                </div>
              </LI>
            </OL>
          ))}
        </Absolute>{" "}
      </div>
    );
  }
}

export default withNavigateHook(testcase);

//---------------------------------------------------------

// render() {
//   return (
//     <div>

//       <Formik
//         initialValues={this.state}
//         validate={(values) => this.validate(values)}
//         onSubmit={(values, { setSubmitting }) =>
//           this.handleSubmit(values, setSubmitting)
//         }
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting,
//           /* and other goodies */
//         }) => (
//           <Form onSubmit={handleSubmit}>
//             <MargD>
//               <Label for="name">Name</Label>
//               <Input

//               />
//               <span>{errors.name && touched.name && errors.name}</span>
//             </MargD>
//             <MargD>
//               <Label for="email">Email </Label>
//               <Input
//                 type="text"
//                 id="email"
//                 name="email"
//                 placeholder="Enter Email"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.email}
//               />{" "}
//               <span>{errors.email && touched.email && errors.email}</span>
//             </MargD>
//             <MargD>
//               <Label for="password">Password </Label>
//               <Input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Enter Password"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.password}
//               />{" "}
//               <span>
//                 {errors.password && touched.password && errors.password}
//               </span>
//             </MargD>
//             <MargD>
//               {" "}
//               <Label for="accesslevel">Accesslevel </Label>
//               <select
//                 id="Accesslevel"
//                 name="accesslevel"
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 value={values.accesslevel}
//               >
//                 <option value="">Select</option>
//                 <option value="admin">Admin</option>
//                 <option value="tester">Tester</option>
//               </select>{" "}
//               <span>
//                 {errors.accesslevel &&
//                   touched.accesslevel &&
//                   errors.accesslevel}
//               </span>
//             </MargD>

//             <Button type="submit" value="Submit" disabled={isSubmitting}>
//               Submit
//             </Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// }
