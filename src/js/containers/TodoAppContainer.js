import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import * as TodosActions from "./../actions/todos";
import TodoAdd from "./../components/TodoAdd";
import TaskList from "../components/TaskLists";
import Nav from "./../components/navigations/Nav";
import DoTask from "./../components/dotask/DoTask";


  // min-height: 850px;
// style
const _Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 80px 518px;
  height: 100vh;
`;
const _TLWrapper = styled.div`
  width: 100%;
  background-color: #333;
  padding: 33px 30px;
  height: 100%;
`;

class App extends Component {
  render() {
    const { todos, todosActions } = this.props;
    return (
      <BrowserRouter>
      {/*  basename="/Web_React_Todolist/" */}
        <_Wrapper>
          <DoTask todo={todos[0]}></DoTask>
          <Nav></Nav>
          <_TLWrapper>
            <Switch>
            {/* <Redirect exact from="/" to="/add" /> */}
            <Redirect exact from="/Web_React_Todolist/" to="/Web_React_Todolist/add" />
              <Route path="/add">
                <TodoAdd addTask={todosActions.addTask} />
              </Route>
              <Route path="/">
              {/* tasklist/todo */}
                <TaskList
                  todos={todos}
                  saveTask={todosActions.editTask}
                  archiveTask={todosActions.archiveTask}
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
  const array = [...state.todos];
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
