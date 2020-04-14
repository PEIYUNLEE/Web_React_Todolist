import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import * as todoActions from './actions/todos';
import todoApp from './reducers';
import App from './app';


let store = createStore(todo);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);