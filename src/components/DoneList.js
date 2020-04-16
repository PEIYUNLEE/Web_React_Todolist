import React, { Component } from "react";

class DoneList extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr><th>DoneList</th></tr>
          <tr>
            <th>Todo</th>
            <th>Tomo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}

export default DoneList;