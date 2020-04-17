import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import * as TodosActions from "./../actions/todos";
import TodoAdd from "./../components/TodoAdd";
import TaskList from "./../components/TaskList";
import Nav from "./../components/navigations/Nav";

class App extends Component {
  render() {
    const { todos, todosActions } = this.props;
    return (
      <BrowserRouter>
        <div>
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
        </div>
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
