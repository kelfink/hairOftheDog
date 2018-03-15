import { combineReducers } from "redux";
import cats from "./cats";
import dogs from "./dogs";

// reducer with initial state
const initialState = {
  fetching: false,
  dog: null,
  cat: null,
  error: null
};

export default combineReducers({
  cats,
  dogs
});
