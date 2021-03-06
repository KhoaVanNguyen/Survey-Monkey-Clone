import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers'
import axios from 'axios'
window.axios = axios
const store = createStore( reducers , {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
console.log('Hello')
console.log("stripe key " + process.env.REACT_APP_STRIPE_KEY);
console.log("node env " + process.env.NODE_ENV);
