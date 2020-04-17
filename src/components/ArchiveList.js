import React, { Component } from "react";
import ArchiveItem from "./ArchiveItem";

class ArchiveList extends Component {
  constructor(props) {
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  render() {
    return (
      <div>
        <h3>ArchiveList</h3>
        <table>
          <thead>
            <tr>
              <th>Todo</th>
              <th>Tomo</th>
              <th>Complete</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderItems()}</tbody>
        </table>
      </div>
    );
  }

  renderItems() {
    const { todos, unarchiveTask } = this.props;

    let list = [];
    todos.forEach((todo, idx) => {
      if (todo.isArchived) {
        list.push(
          <ArchiveItem
            key={idx}
            idx={idx}
            todo={todo}
            unarchiveTask={unarchiveTask}
          />
        );
      }
    });
    return list;
  }
}

export default ArchiveList;
