import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect, NavLink,Link } from "react-router-dom";
import styled from "styled-components";

// styled-components
const _Ul = styled.ul`
  display: flex;
`;
const _Li = styled.li`
  display: flex;
  justify-content: center;
  list-style-type: none;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 0.6px;
  color: #fcfcfc;
  width: 80px;
  height: 25px;
`;

class ListNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: [true, false, true],
    };
  }

  render() {
    // inline style
    const s_a_active = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      borderRadius: "8px 8px 0px 0px",
      width: "100%",
      backgroundColor: "#EA5548",
      color: "#FCFCFC",
    };
    const s_a = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      borderRadius: "8px 8px 0px 0px",
      width: "100%",
      backgroundColor: "#606060",
      color: "#ACACAC",
      marginRight: "5px"
    };

    return (
      <nav>
        <_Ul>
          <_Li>
            <NavLink to="/tasklist/todo" style={s_a} activeStyle={s_a_active}>
              TO DO
            </NavLink>
          </_Li>
          <_Li>
            <NavLink to="/tasklist/done" style={s_a} activeStyle={s_a_active}>
              DONE
            </NavLink>
          </_Li>
          <_Li>
            <NavLink to="/tasklist/archive" style={s_a} activeStyle={s_a_active}>
              ARCHIVE
            </NavLink>  
          </_Li>
        </_Ul>
      </nav>
    );
  }
}

export default ListNav;
