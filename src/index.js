import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import todoApp from "./js/reducers/index";
import TodoAppContainer from "./js/containers/TodoAppContainer";

import "./styles/css/style.css";

let store = createStore(todoApp);

//initial data
store.dispatch({
  type: "INITIAL_TASK",
  task: "task1",
  isCompleted: false,
  estimateTomo: 1,
  doneTomo:0,
  timerState:true,
  timerType:"DO",
  timer:[0,20,"00:20"]
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task2",
  isCompleted: true,
  estimateTomo: 2,
  doneTomo:0,
  timerState:false,
  timerType:"DO",
  timer:[25,0,"25:00"]
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task3",
  isCompleted: true,
  estimateTomo: 3,
  doneTomo:0,
  timerState:false,
  timerType:"DO",
  timer:[25,0,"25:00"]
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task4",
  isCompleted: false,
  estimateTomo: 4,
  doneTomo:0,
  timerState:false,
  timerType:"DO",
  timer:[25,0,"25:00"]
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task5",
  isCompleted: false,
  estimateTomo: 5,
  doneTomo:0,
  timerState:false,
  timerType:"DO",
  timer:[25,0,"25:00"]
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task6",
  isCompleted: true,
  estimateTomo: 6,
  doneTomo:0,
  timerState:false,
  timerType:"DO",
  timer:[25,0,"25:00"]
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task7",
  isCompleted: false,
  estimateTomo: 7,
  doneTomo:0,
  timerState:false,
  timerType:"DO",
  timer:[25,0,"25:00"]
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task8",
  isCompleted: true,
  estimateTomo: 8,
  doneTomo:0,
  timerState:false,
  timerType:"DO",
  timer:[25,0,"25:00"]
});

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById("root")
);
