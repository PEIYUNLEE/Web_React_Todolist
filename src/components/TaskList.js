import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import TodoList from "./TaskLists/Todo/TodoList";
import DoneList from "./TaskLists/Done/DoneList";
import ArchiveList from "./TaskLists/Archive/ArchiveList";
import ListNav from "./navigations/ListNav";

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    const {
      saveTask,
      archiveTask,
      unarchiveTask,
      completeTask,
      redoTask,
    } = this.props;
    return (
      <div>
        <ListNav></ListNav>
        <Switch>
          <Redirect exact from="/" to="/todo" />
          <Route path="/tasklist/todo">
            <TodoList
              todos={todos}
              saveTask={saveTask}
              archiveTask={archiveTask}
              completeTask={completeTask}
            />
          </Route>
          <Route path="/tasklist/done">
            <DoneList
              todos={todos}
              archiveTask={archiveTask}
              redoTask={redoTask}
            />
          </Route>
          <Route path="/tasklist/archive">
            <ArchiveList todos={todos} unarchiveTask={unarchiveTask} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default TaskList;
