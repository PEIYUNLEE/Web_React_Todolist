import React, { Component } from "react";

class DoneItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { idx,todo,archiveTask,redoTask } = this.props;

    return (
      <tr>
        <td>{todo.task}</td>
        <td>{todo.estimateTomo}</td>
        <td>{todo.isCompleted+''}</td>
        <td>
          <button onClick={()=>{archiveTask(idx)}}>ARCHIVE</button>
          <button onClick={()=>{redoTask(idx)}}>REDO</button>
        </td>
      </tr>
    );
  }
}

export default DoneItem;
