import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import App_Container from "../containers/App_Container";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import reducer from "../reducers/index";

import watcherSaga from "../sagas/sagas";

console.log("reduce ", reducer);
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

var store = null;
if (window.navigator.userAgent.includes("Chrome")) {
  console.log("is chrome");
  store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));
} else {
  store = createStore(reducer, compose(applyMiddleware(sagaMiddleware)));
}
console.log("STORE STATE ", store.getState());
// run the saga
sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={store}>
    <App_Container />
  </Provider>,
  document.body.appendChild(document.createElement("div"))
);
registerServiceWorker();
