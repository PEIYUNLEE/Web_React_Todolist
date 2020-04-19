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
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task2",
  isCompleted: true,
  estimateTomo: 2,
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task3",
  isCompleted: true,
  estimateTomo: 3,
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task4",
  isCompleted: false,
  estimateTomo: 4,
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task5",
  isCompleted: false,
  estimateTomo: 5,
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task6",
  isCompleted: true,
  estimateTomo: 6,
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task7",
  isCompleted: false,
  estimateTomo: 7,
});
store.dispatch({
  type: "INITIAL_TASK",
  task: "task8",
  isCompleted: true,
  estimateTomo: 8,
});

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById("root")
);
