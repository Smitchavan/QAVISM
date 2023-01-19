import React, { Component } from "react";
import "./app.css";
// import { Provider } from "react-redux";
// import store from "./store";
import Nav from "./components/home/nav";
import Project from "./components/projects/project";
import Home from "./components/home/home";
import Testcase from "./components/testcases/testcase";
import Testset from "./components/testcases/testset";
import Viewcases from "./components/testcases/viewcases";
import Register from "./components/lore/register";
import Issues from "./components/issues/issues";
import ViewIssues from "./components/issues/viewIssues";
import ForgotPassword from "./components/lore/forgotPassword";
import Login from "./components/lore/login";
import Pnf from "./components/lore/pnf";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <div>
                <Nav></Nav>
                <Home></Home>
              </div>
            }
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

          <Route
            path="/forgotPassword"
            element={<ForgotPassword></ForgotPassword>}
          ></Route>
          <Route path="/newProject" element={<Project></Project>}></Route>
          <Route path="/home/testcase" element={<Testcase></Testcase>}></Route>
          <Route path="/testset" element={<Testset></Testset>}></Route>
          <Route path="/viewcases" element={<Viewcases></Viewcases>}></Route>
          <Route path="/issues" element={<Issues></Issues>}></Route>
          <Route path="/viewissues" element={<ViewIssues></ViewIssues>}></Route>
          <Route path="*" element={<Pnf></Pnf>} />
        </Routes>
      </Router>
    );
  }
}
