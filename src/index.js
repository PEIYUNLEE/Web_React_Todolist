import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import todoApp from './reducers/index';
import TodoAppContainer from './containers/TodoAppContainer';

import '../assets/css/style.css'

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById("root")
);
