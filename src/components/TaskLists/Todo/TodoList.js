import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this._renderItems = this._renderItems.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TodoList</h3>
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
    const todos = this.props.todos;
    const { saveTask, archiveTask, completeTask } = this.props;

    let list = [];
    todos.forEach((todo, idx) => {
      if (!todo.isArchived && !todo.isCompleted) {
        list.push(
          <TodoItem
            key={idx}
            idx={idx}
            todo={todo}
            saveTask={saveTask}
            archiveTask={archiveTask}
            completeTask={completeTask}
          />
        );
      }
    });
    return list;
  }
}

export default TodoList;
