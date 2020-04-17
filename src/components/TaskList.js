import React, { Component } from "react";
import TodoList from "./TodoList";
import DoneList from "./DoneList";
import ArchiveList from "./ArchiveList";

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {todos} = this.props;
    const { saveTask, archiveTask, unarchiveTask, completeTask,redoTask } = this.props;
    return (
      <div>
        <TodoList todos={todos} saveTask={saveTask} archiveTask={archiveTask} completeTask={completeTask}/>
        <DoneList todos={todos} archiveTask={archiveTask} redoTask={redoTask}/>
        <ArchiveList todos={todos} unarchiveTask={unarchiveTask} />
      </div>
    );
  }
}

export default TaskList;
