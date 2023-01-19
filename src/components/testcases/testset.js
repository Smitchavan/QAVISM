import axios from "axios";
import React, { Component } from "react";

export default class testset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testdata: "",
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/testcase/gettests")
      .then((res) => this.setState({ testdata: res.data }));
  }

  render() {
    return (
      <div>
        testset
        <div></div>
        <div>{console.log(this.state.testdata)}</div>
      </div>
    );
  }
}
