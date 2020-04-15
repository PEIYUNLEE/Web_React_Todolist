import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodosActions from '../actions/todos';
import TodoList from '../components/TodoList';
import TodoAdd from '../components/TodoAdd';

class App extends Component {
    render() {
        const { todos, todosActions } = this.props;
        return (
            <div>
                <h1>TASK LISTS</h1>
                <TodoAdd addTask={todosActions.addTask} />
                <TodoList
                    todos={todos}
                    saveTask={todosActions.editTask}
                />
                {/* saveTask={todosActions.editTask}
                archiveTask={todosActions.archiveTask}
                completeTask={todosActions.toggleTask} */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        todosActions:bindActionCreators(TodosActions,dispatch)
    }
}

const TodoAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default TodoAppContainer;
