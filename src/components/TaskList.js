import React, { Component } from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";
import ArchiveList from "./ArchiveList";

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = this.props.todos;
    const {saveTask,archiveTask} = this.props;
    return (
        <div>
            <TodoList todos={todos} saveTask={saveTask} archiveTask={archiveTask}/>
            <DoneList todos={todos}/>
            <ArchiveList todos={todos}/>
        </div>
    );
  }
}

export default TaskList;
