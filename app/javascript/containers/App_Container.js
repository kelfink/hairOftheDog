import React, { Component } from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";
import App from "../components/App";

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    fetching: state.cats.fetching || state.dogs.fetching,
    dog: state.dogs.dog,
    cat: state.cats.cat,
    error: state.cats.error || state.cats.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: "DOG_API_CALL_REQUEST" }),
    onRequestCat: () => dispatch({ type: "CAT_API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
