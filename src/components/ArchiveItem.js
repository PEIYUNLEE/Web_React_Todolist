import React, { Component } from "react";

class ArchiveItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo } = this.props;

    return (
      <tr>
        <td>{todo.task}</td>
        <td>{todo.estimateTomo}</td>
        <td>
          <button>UNARCHIVE</button>
        </td>
      </tr>
    );
  }
}

export default ArchiveItem;
