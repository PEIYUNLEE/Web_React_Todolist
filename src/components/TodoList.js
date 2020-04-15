import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.renderItems = this.renderItems.bind(this);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{this.renderItems()}</tbody>
      </table>
    );
  }

  renderItems() {
    const filter = this.props.filter;
    const todos = this.props.todos;
    const { saveTask, deleteTask, completeTask } = this.props;

    let list = [];
    todos.forEach((todo, idx) => {
      if (
        filter == "SHOW_ALL" ||
        (filter === "SHOW_COMPLETED" && todo.isCompleted) ||
        (filter === "SHOW_UNCOMPLETED" && !todo.isCompleted)
      ) {
        list.push(
          <TodoItem
            key={idx}
            index={idx}
            todo={todo}
            saveTask={saveTask}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        );
      }
    });
    return list;
  }
}

export default TodoList;
