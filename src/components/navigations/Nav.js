import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import '../../styles/NavStyle'

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/add">ADD</Link>
            </li>
            <li>
              <Link to="/tasklist">LIST</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
