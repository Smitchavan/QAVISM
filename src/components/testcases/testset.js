import axios from "axios";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AccForm, TestForm, TestInput } from "../../style";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Table from "./table";
// import Refresh from "../../refresh";

import {
  // TestForm,
  // TestInput,
  TestButton,
  TestDiv,
  TestSelect,
  MargD,
} from "../../style";
import "react-responsive-modal/styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class testset extends Component {
  constructor(props) {
    super(props);
    this.GetAlltestSet = this.GetAlltestSet.bind(this);
    this.state = {
      testdata: [],
      testbyid: "",
      testsetdata: [],
      AlltestsetData: [],

      testsetForm: {
        testsetname: "",
        testcases: [],
        assigntoproject: "",
      },
    };
  }

  async componentDidMount() {
    console.log("component did mount");
    axios.get("http://localhost:5000/api/testcase/gettests").then((res) => {
      this.setState({ testdata: res.data });
      // console.log(res);
    });
  }
  GetAlltestSet = () => {
    axios.get("http://localhost:5000/api/testset/gettestsets").then((res) => {
      this.setState({ AlltestsetData: res.data });
    });
  };

  AddTest = async (test) => {
    //  console.log("HIi Boy", test);
    let response = await axios.get(
      "http://localhost:5000/api/testcase/gettestbyid",
      {
        params: { id: test },
      }
    );

    this.setState({ testbyid: response.data });

    this.AddtoTestset(response.data);
  };

  handlechange = async (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      testsetForm: {
        ...this.state.testsetForm,
        [name]: value,
      },
    });
  };

  AddtoTestset = async (data) => {
    // console.log(this.state.testsetdata._id);
    let testsetid = this.state.testsetdata._id;
    // console.log(data._id);
    if (this.state.testsetdata._id === undefined) {
      alert("TESTSET is not Added");
    } else {
      try {
        let Result = await axios.post(
          "http://localhost:5000/api/testset/inserttestsbyid",
          [{ id: testsetid }, { testcaseinfo: data }]
        );
        console.log(Result);
        // console.log(data.testname);
        toast(`test case "${data.testname}" added successfully`);
        this.GetAlltestSet();
      } catch (error) {
        console.log(error);
      }
    }
  };

  GettestSet = async (testsetid) => {
    // console.log(testsetid);

    let response = await axios.get(
      "http://localhost:5000/api/testset/gettestsetbyid",
      {
        params: { id: testsetid },
      }
    );
    await this.setState({
      testsetdata: response.data,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let values = this.state.testsetForm;
    if (this.state.testsetForm.testsetname === "") {
      alert("please fill testsetname");
    }

    try {
      let result = await axios.post(
        "http://localhost:5000/api/testset",
        values
      );

      await this.setState({
        testsetForm: {
          testsetname: "",
          assigntoproject: "",
        },
      });

      this.GettestSet(result.data._id);
    } catch (error) {}
  };

  render() {
    return (
      <div>
        <ToastContainer />
        <center>
          <h1>TestSets-----{this.state.testsetdata.testsetname}</h1>
        </center>
        <div>
          <TestForm>
            <MargD>
              <TestInput
                type="text"
                placeholder="Enter TestSetName"
                id="testsetname"
                name="testsetname"
                value={this.state.testsetForm.testsetname}
                onChange={this.handlechange}
              ></TestInput>
            </MargD>
            <div>
              {" "}
              <TestDiv>
                ASSIGN TO PROJECT
                <TestSelect
                  type="text"
                  id="assignproject"
                  name="assigntoproject"
                  value={this.state.testsetForm.assigntoproject}
                  onChange={this.handlechange}
                >
                  <option value="">Select</option>
                  <option value="Started">Started</option>
                  <option value="Completed">Completed</option>
                </TestSelect>
              </TestDiv>
            </div>
            <TestButton onClick={this.handleSubmit}>
              <h1>Add TestSet</h1>
            </TestButton>
            <div>
              <Table
                data={this.state.AlltestsetData}
                funct={this.GetAlltestSet}
              />
            </div>
          </TestForm>
        </div>

        <AccForm>
          <center>SELECT TEST CASES</center>
          <Box sx={{ maxWidth: 320, bgcolor: "background.paper" }}>
            <nav aria-label="main mailbox folders">
              <List>
                {this.state.testdata.map((value) => (
                  <ListItem disablePadding key={value._id}>
                    {" "}
                    <ListItemButton
                      onClick={() => {
                        this.AddTest(value._id);
                      }}
                    >
                      <ListItemText primary={value.testname} />{" "}
                    </ListItemButton>
                  </ListItem>
                ))}{" "}
              </List>
            </nav>
          </Box>
        </AccForm>
      </div>
    );
  }
}
