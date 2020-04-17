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
  display:flex;
`;


class App extends Component {
  render() {
    const { todos, todosActions } = this.props;
    return (
      <BrowserRouter>
        <_Wrapper>
          <Nav></Nav>
          <h1>TASK LISTS</h1>
          <Switch>
            <Redirect exact from="/" to="/add" />
            <Route path="/add">
              <TodoAdd addTask={todosActions.addTask} />
            </Route>
            <Route path="/tasklist">
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
        </_Wrapper>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    todosActions: bindActionCreators(TodosActions, dispatch),
  };
};

const TodoAppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default TodoAppContainer;
