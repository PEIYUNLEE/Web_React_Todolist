import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';


const todos = [
  {
    task: 'Install packages',
    isCompleted: false
  },
  {
    task: 'Add webpack.config.js',
    isCompleted: false
  },
  {
    task: 'Break UI into components',
    isCompleted: false
  }
];

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      todos //todos:todos
    }
    this.saveTask = this.saveTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  render() {
    return (
      <div>
        <h1>React Todo List</h1>
        <TodoList todos={this.state.todos} saveTask={this.saveTask} deleteTask={this.deleteTask} completeTask={this.completeTask}/>
        <TodoAdd todos={this.state.todos} addTask={this.addTask} />
      </div>
    )
  }

  saveTask(idx,val){
    let newTodos = [...this.state.todos]  //copy array
    newTodos[idx] = Object.assign({},newTodos[idx],{task:val});  //copy object
    this.setState({todos:newTodos})
  }

  addTask(val){
    let newTodos = [...this.state.todos]  //copy array
    newTodos.push({
      task:val,
      isCompleted:false
    })
    this.setState({todos:newTodos})
  }

  deleteTask(idx){
    let newTodos = [...this.state.todos]  //copy array
    newTodos.splice(idx,1)
    this.setState({todos:newTodos})
  }
  
  completeTask(idx,val){
    let newTodos = [...this.state.todos]  //copy array
    newTodos[idx] = Object.assign({},newTodos[idx],{isCompleted: !newTodos[idx].isCompleted});  //copy object
    this.setState({todos:newTodos})
  }
}

export default App;