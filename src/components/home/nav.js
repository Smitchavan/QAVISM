import React, { Component } from "react";
import { Nav, MargR } from "../../style";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Link } from "react-router-dom";

export default class nav extends Component {
  render() {
    return (
      <div>
        <Nav>
          <MargR>
            <React.Fragment>
              <Button variant="contained">Taskboard</Button>
            </React.Fragment>
          </MargR>
          <MargR>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Project
                  </Button>{" "}
                  <Menu {...bindMenu(popupState)}>
                    <Link to="/newProject" style={{ textDecoration: "none" }}>
                      <MenuItem onClick={popupState.close}>
                        {" "}
                        Create Project
                      </MenuItem>
                    </Link>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </MargR>
          <MargR>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Test Cases
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <Link to="testcase" style={{ textDecoration: "none" }}>
                      <MenuItem onClick={popupState.close}>
                        Create Test Case
                      </MenuItem>
                    </Link>
                    <Link to="/testset" style={{ textDecoration: "none" }}>
                      <MenuItem onClick={popupState.close}>
                        Create Test Set
                      </MenuItem>
                    </Link>
                    <Link to="/viewcases" style={{ textDecoration: "none" }}>
                      <MenuItem onClick={popupState.close}>View Cases</MenuItem>
                    </Link>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </MargR>
          <MargR>
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    Issues
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    {" "}
                    <Link to="issues" style={{ textDecoration: "none" }}>
                      <MenuItem onClick={popupState.close}>
                        Create Issues
                      </MenuItem>{" "}
                    </Link>
                    <Link to="viewissues" style={{ textDecoration: "none" }}>
                      {" "}
                      <MenuItem onClick={popupState.close}>
                        View Issues
                      </MenuItem>
                    </Link>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </MargR>
          <Link to="/login">
            {" "}
            <button
              type="button"
              class="btn btn-danger"
              style={{ marginRight: "5px" }}
            >
              Logout
            </button>
          </Link>
        </Nav>
      </div>
    );
  }
}
