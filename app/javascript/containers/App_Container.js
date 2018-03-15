import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";
import App from "../components/App";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    dog: state.dog,
    cat: state.cat,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "DOG_API_CALL_REQUEST" }),
    onRequestCat: () => dispatch({ type: "CAT_API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
