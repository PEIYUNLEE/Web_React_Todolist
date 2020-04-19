import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import * as TodosActions from "./../actions/todos";
import TodoAdd from "./../components/TodoAdd";
import TaskList from "./../components/TaskList";
import Nav from "./../components/navigations/Nav";

// style
const _Wrapper = styled.div`
  display: flex;
  height: 100vh;
  min-height: 850px;
`;
const _TLWrapper = styled.div`
  width: 518px;
  background-color: #333;
  padding: 33px 30px;
  height: 100%;
`;

class App extends Component {
  render() {
    const { todos, todosActions } = this.props;
    return (
      <BrowserRouter basename="/Web_React_Todolist/">
        <_Wrapper>
          <Nav></Nav>
          <_TLWrapper>
            <Switch>
            <Redirect exact from="/" to="/add" />
              {/* <Route exact path="/">
                <TodoAdd addTask={todosActions.addTask} />
              </Route> */}
              <Route path="/add">
                <TodoAdd addTask={todosActions.addTask} />
              </Route>
              <Route path="/tasklist/todo">
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
