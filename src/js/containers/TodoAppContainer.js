import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import * as TodosActions from "./../actions/todos";
import TodoAdd from "./../components/TodoAdd";
import TaskList from "./../components/TaskList";
import Nav from "./../components/navigations/Nav";

//initial data
const initialData = [
  {
    task: "task1",
    isCompleted: false,
    estimateTomo: 3,
    isArchived: false,
  },
  {
    task: "task2",
    isCompleted: true,
    estimateTomo: 0,
    isArchived: false,
  },
  {
    task: "task3",
    isCompleted: false,
    estimateTomo: 3,
    isArchived: true,
  },
  {
    task: "task4",
    isCompleted: false,
    estimateTomo: 2,
    isArchived: false,
  },
];

// style
const _Wrapper = styled.div`
  display: flex;
  height: 100vh;
  min-height: 850px;
`;
const _TLWrapper = styled.div`
  width: 518px;
  background-color:#333;
  padding: 33px 30px;
  height: 100%;
`;

class App extends Component {
  render() {
    const { todos, todosActions } = this.props;
    return (
      <BrowserRouter>
        <_Wrapper>
          <Nav></Nav>
          <_TLWrapper>
            <Switch>
              {/* <Redirect exact from="/" to="/" /> */}
              <Route path="/add">
                <TodoAdd addTask={todosActions.addTask} />
              </Route>
              <Route path="/">
                <TaskList
                  todos={todos}
                  saveTask={todosActions.editTask}
                  archiveTask={todosActions.archiveTask}
                  unarchiveTask={todosActions.unarchiveTask}
                  completeTask={todosActions.completeTask}
                  redoTask={todosActions.redoTask}
                />
              </Route>
            </Switch>
          </_TLWrapper>
        </_Wrapper>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  const array = [
    ...initialData,
    ...state.todos,
  ]
  return {
    todos: array,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    todosActions: bindActionCreators(TodosActions, dispatch),
  };
};

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default TodoAppContainer;
