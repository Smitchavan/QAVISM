import React, { Component } from "react";

export default class refresh extends Component {
  constructor(props) {
    super(props);

    this.handleBeforeUnload = this.handleBeforeUnload.bind(this);
  }
  componentDidMount() {
    window.addEventListener("beforeunload", this.handleBeforeUnload);
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  }

  handleBeforeUnload = (event) => {
    event.preventDefault();
    event.returnValue = alert("Are you sure you want to leave?");
  };

  render() {
    return <div>{alert("do YOU want to leave page")}</div>;
  }
}
