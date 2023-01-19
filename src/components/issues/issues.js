import React, { Component } from "react";

export default class issues extends Component {
  render() {
    return (
      <div>
        Issues
        <input placeholder="Add Issue Name"></input>
        <input placeholder="Add issue Severity"></input>
        <div>Add Issues to Project</div>
      </div>
    );
  }
}
