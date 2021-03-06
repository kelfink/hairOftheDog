import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import App_Container from "../feature/App_Container";
import "../feature/styles/index.css";
import reducer from "../feature/reducer";
import watcherSaga from "../feature/sagas";

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
