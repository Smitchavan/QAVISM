import axios from "axios";
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
export default class table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  refreshPage() {
    window.location.reload(false);
  }
  DeltestCases = async (id, testsetid) => {
    // console.log(id);
    // console.log(testsetid);
    let Result = await axios.post(
      "http://localhost:5000/api/testset/deltestfromid",
      { data: { testsetId: testsetid, id: id } }
    );
    console.log(Result);
    if (Result.data.modifiedCount === 1) {
      toast.success("test removed successfully");
    } else {
      toast.error("Test Case does not exist,Please Refresh");
    }
  };
  DeltestSet = async (id) => {
    // console.log(id);
    let Result = await axios.delete(
      "http://localhost:5000/api/testset/deltestsetbyid",
      { data: { id: id } }
    );
    console.log(Result.data.testsetname);
    if (Result.data.testsetname === undefined) {
      toast.error("Please Refresh");
    } else {
      toast.success(`${Result.data.testsetname} deleted Successfully`);
      this.refreshPage();
    }
  };
  render() {
    return (
      <div>
        <div onClick={this.props.funct}>Refresh</div>
        {this.props.data.map((val) => (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>TESTSET NAME</th>
                <th>TESTCASES</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td key={val._id}>{val.__v}</td>
                <td
                  onClick={() => {
                    this.DeltestSet(val._id);
                  }}
                >
                  {val.testsetname}
                </td>
                <td>
                  {val.testcases.map((res) => (
                    <div
                      key={res._id}
                      onClick={() => {
                        this.DeltestCases(res._id, val._id);
                      }}
                    >
                      {res.testname}
                    </div>
                  ))}
                </td>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    );
  }
}
