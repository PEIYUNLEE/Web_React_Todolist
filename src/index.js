import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import todoApp from './js/reducers/index';
import TodoAppContainer from './js/containers/TodoAppContainer';

import './styles/css/style.css'

let store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById("root")
);
