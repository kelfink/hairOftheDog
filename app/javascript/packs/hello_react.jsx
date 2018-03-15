import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import App_Container from "../containers/App_Container";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import reducer from "../reducers/index";

import { watcherSaga } from "../sagas/sagas";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// dev tools middleware
// const reduxDevTools =
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

console.log("Chrome?", window.navigator.userAgent);
// create a redux store with our reducer above and middleware
//let store = createStore(
//reducer,
// compose(applyMiddleware(sagaMiddleware), reduxDevTools)
//);

// Only chrome can handle the redux dev tool
// redux compose cannot handle a null or undefined middleware
var store = null;
if (window.navigator.userAgent.includes("Chrome")) {
  console.log("is chrome");
  store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));
} else {
  store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));
}

// run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App_Container />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
