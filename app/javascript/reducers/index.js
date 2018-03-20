import { combineReducers } from "redux";
import * as actionTypes from "../constants/actionTypes";

function dogs(state = { dog: null, error: null, fetching: false }, action) {
  switch (action.type) {
    case actionTypes.DOG_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case actionTypes.DOG_API_CALL_SUCCESS:
      console.log("HELLO DOGS SUCCESS ", action);
      return { ...state, fetching: false, dog: action.dog, cat: null };
      break;
    case actionTypes.DOG_API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
      break;
    default:
      return state;
  }
}

function cats(state = { cat: null, error: null, fetching: false }, action) {
  switch (action.type) {
    case actionTypes.CAT_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case actionTypes.CAT_API_CALL_SUCCESS:
      return { ...state, fetching: false, cat: action.cat, dog: null };
      break;
    case actionTypes.CAT_API_CALL_FAILURE:
      return { ...state, fetching: false, cat: null, error: action.error };
      break;
    default:
      return state;
  }
}

const reducer = combineReducers({
  cats,
  dogs
});

export default reducer;
