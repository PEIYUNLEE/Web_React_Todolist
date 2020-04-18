import React, { Component } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

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
    
    console.log(this.props.todos)
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
