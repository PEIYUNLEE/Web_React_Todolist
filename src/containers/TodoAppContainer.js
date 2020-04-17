import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as TodosActions from "../actions/todos";
import TodoAdd from "../components/TodoAdd";
import TaskList from "../components/TaskList";

class App extends Component {
  render() {
    const { todos, todosActions } = this.props;
    return (
      <div>
        <h1>TASK LISTS</h1>
        <TodoAdd addTask={todosActions.addTask} />
        <TaskList
          todos={todos}
          saveTask={todosActions.editTask}
          archiveTask={todosActions.archiveTask}
          unarchiveTask={todosActions.unarchiveTask}
          completeTask={todosActions.completeTask}
          redoTask={todosActions.redoTask}
        />
      </div>
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
