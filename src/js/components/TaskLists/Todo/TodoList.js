import React, { Component } from "react";
import styled from "styled-components";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this._renderItems = this._renderItems.bind(this);
  }

  render() {
    return (
      <div>{this._renderItems()}</div>
    );
  }

  _renderItems() {
    const todos = this.props.todos;
    const { saveTask, archiveTask, completeTask } = this.props;

    let list = [];
    todos.forEach((todo, idx) => {
      if (!todo.isCompleted) {
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
