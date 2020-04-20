import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import TodoList from "./tasklists/todo/TodoList";
import DoneList from "./tasklists/done/DoneList";
// import ArchiveList from "./tasklists/Archive/ArchiveList";
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
    const { todos, selectedIdx } = this.props;
    const {
      saveTask,
      archiveTask,
      completeTask,
      redoTask,
      setSelectedIdx,
    } = this.props;

    return (
      <div>
        <_H3>TASK LISTS</_H3>
        <_Line></_Line>
        <BrowserRouter basename="/Web_React_Todolist/">
          {/* basename="/Web_React_Todolist/" */}
          <ListNav></ListNav>
          <Switch>
            <Route path="/tasklist/todo">
              {/* tasklist/todo */}
              <TodoList
                todos={todos}
                saveTask={saveTask}
                archiveTask={archiveTask}
                setSelectedIdx={setSelectedIdx}
                selectedIdx={selectedIdx}
              />
            </Route>
            <Route path="/tasklist/done">
              <DoneList
                todos={todos}
                archiveTask={archiveTask}
                redoTask={redoTask}
              />
            </Route>
            {/* <Route path="/tasklist/archive">
              <ArchiveList todos={todos} unarchiveTask={unarchiveTask} />
            </Route> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default TaskList;
