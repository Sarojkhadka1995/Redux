import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers} from 'redux';
import{Provider} from 'react-redux'

const store = createStore(
    combineReducers({
        students: () => [
            {id:1, name:"Saroj", age:"22"},
            {id:2, name:"bibek", age:"23"},
            {id:3, name:"Eugen",age:"24"}
        ]
    })
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
