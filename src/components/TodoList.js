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
    const {saveTask} = this.props;

    let list = [];
    todos.forEach((todo, idx) => {
      list.push(
        <TodoItem
          key={idx}
          idx={idx}
          todo={todo}
          saveTask={saveTask}
        />
      );
    });

    console.log(todos)

    return list;
  }
}

export default TodoList;
