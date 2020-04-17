import React, { Component } from "react";

class ArchiveItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { idx,todo,unarchiveTask } = this.props;

    return (
      <tr>
        <td>{todo.task}</td>
        <td>{todo.estimateTomo}</td>
        <td>{todo.isCompleted+''}</td>
        <td>
          <button onClick={()=>{unarchiveTask(idx)}}>UNARCHIVE</button>
        </td>
      </tr>
    );
  }
}

export default ArchiveItem;
