import React, { Component } from "react";
import DoneItem from './DoneItem'

class DoneList extends Component {
  constructor(props) {
    super(props);

    this._renderItems = this._renderItems.bind(this);
  }

  render() {
    return (
      <div>
        <h3>DoneList</h3>
        <table>
          <thead>
            <tr>
              <th>Todo</th>
              <th>Tomo</th>
              <th>Complete</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this._renderItems()}</tbody>
        </table>
      </div>
    );
  }

  _renderItems() {
    const {todos,archiveTask,redoTask} = this.props;

    let list = [];
    todos.forEach((todo, idx) => {
      if (todo.isCompleted && !todo.isArchived) {
        list.push(
          <DoneItem
            key={idx}
            idx={idx}
            todo={todo}
            archiveTask={archiveTask}
            redoTask={redoTask}
          />
        );
      }
    });
    return list;
  }
}

export default DoneList;
