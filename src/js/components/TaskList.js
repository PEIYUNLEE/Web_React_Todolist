import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import TodoList from "./TaskLists/Todo/TodoList";
import DoneList from "./TaskLists/Done/DoneList";
import ArchiveList from "./TaskLists/Archive/ArchiveList";
import ListNav from "./navigations/ListNav";

// style
const _H3 = styled.h3`
  color: #fcfcfc;
  letter-spacing: 2px;
  font-weight: 900;
  font-size: 20px;
`;
const _Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #414141;
  margin: 25px 0px;
`;
const _Wrapper = styled.div`
  border: 1px solid red;
`;

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
        <_H3>TASK LISTS</_H3>
        <_Line></_Line>
        <div>
          <ListNav></ListNav>
          <Switch>
            {/* <Redirect exact from="/" to="/todo" /> */}
            <Route path="/tasklist/todo">
              <TodoList
                todos={todos}
                saveTask={saveTask}
                archiveTask={archiveTask}
                completeTask={completeTask}
              />
            </Route>
            <Route path="/">
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
      </div>
    );
  }
}

export default TaskList;
