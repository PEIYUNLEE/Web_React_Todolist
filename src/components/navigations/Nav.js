import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import add_red from "../../../assets/icons/add_red.png";
import list_red from "../../../assets/icons/list_red.png";
import add_white from "../../../assets/icons/add_white.png";
import list_white from "../../../assets/icons/list_white.png";

// style
const _Nav = styled.nav`
  width: 80px;
  height: 300px;
  background-color: #333333;
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconType: [add_red, list_white],
    };
    this.onLinkClick = this.onLinkClick.bind(this);
  }
  render() {
    return (
      <div>
        <_Nav>
          <ul>
            <li>
              <Link to="/add" onClick={()=>{this.onLinkClick(0)}}><img src={this.state.iconType[0]} /></Link>
            </li>
            <li>
              <Link to="/tasklist" onClick={()=>{this.onLinkClick(1)}}><img src={this.state.iconType[1]} /></Link>
            </li>
          </ul>
        </_Nav>
      </div>
    );
  }

  onLinkClick(idx) {
    switch (idx) {
      //add
      case 0:
        if(this.state.iconType[0] == add_red){
          this.setState({
            iconType: [add_red,list_white]
          });
        }
        else if(this.state.iconType[0] == add_white){
          this.setState({
            iconType: [add_red,list_white]
          });
        }
        break;
        //list
      case 1:
        if(this.state.iconType[1] == list_red){
          this.setState({
            iconType: [add_white,list_red]
          });
        }
        else if(this.state.iconType[1] == list_white){
          this.setState({
            iconType: [add_white,list_red]
          });
        }
        break;
      default:
        break;
    };
  }
}

export default Nav;
