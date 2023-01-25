import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "react-bootstrap/Table";
export default class viewcases extends Component {
  constructor() {
    super();
    this.state = {
      testdata: [],
    };
  }

  async componentDidMount() {
    axios.get("http://localhost:5000/api/testcase/gettests").then((res) => {
      this.setState({ testdata: res.data });
    });
  }
  refreshPage() {
    window.location.reload(false);
  }
  DeleteTest = (id) => {
    // console.log("deleted", id);
    // const tempstate = this.state.testdata.filter((d) => d._id !== id);
    // console.log(tempstate);
    // this.setState({ tempstate });
    axios
      .delete("http://localhost:5000/api/testcase/deltestbyid", {
        data: { id: id },
      })
      .then((res) => {
        console.log(res);
      });
    this.refreshPage();
  };
  render() {
    return (
      <div>
        View cases
        <div>
          <Table striped>
            <thead>
              <tr>
                <th>Test Case Name</th>
                <th>Assigned to Project</th>
                <th>Status</th>
                <th>Testlevel</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.testdata.map((res) => (
                <tr>
                  <td>{res.testname}</td>
                  <td>{res.assigntoproject}</td>
                  <td>{res.status}</td>
                  <td>{res.testlevel}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-warning"
                      style={{ marginRight: "10px" }}
                    >
                      update
                    </button>
                    <button
                      class="btn btn-danger"
                      onClick={() => this.DeleteTest(res._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Link to="/home">BACK TO HOME</Link>
      </div>
    );
  }
}
