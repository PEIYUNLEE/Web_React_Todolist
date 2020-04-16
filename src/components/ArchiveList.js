import React, { Component } from "react";
import ArchiveItem from './ArchiveItem'

class ArchiveList extends Component {
  constructor(props){
    super(props);
    this.renderItems = this.renderItems.bind(this);
  }

  render() {
    return (
      <table>
        <thead>
          <tr><th>ArchiveList</th></tr>
          <tr>
            <th>Todo</th>
            <th>Tomo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderItems()}</tbody>
      </table>
    );
  }

  renderItems() {
    const todos = this.props.todos;
    const {saveTask,archiveTask} = this.props;

    let list = [];
    todos.forEach((todo, idx) => {
      if(todo.isArchive){
        list.push(
          <ArchiveItem
            key={idx}
            idx={idx}
            todo={todo}
            saveTask={saveTask}
            archiveTask={archiveTask}
          />
        );
      }
    });
    return list;
  }
}

export default ArchiveList;