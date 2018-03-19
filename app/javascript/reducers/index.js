import { combineReducers } from "redux";
// import todos from './todos'
// import counter from './counter'

// action types
const DOG_API_CALL_REQUEST = "DOG_API_CALL_REQUEST";
const DOG_API_CALL_SUCCESS = "DOG_API_CALL_SUCCESS";
const DOG_API_CALL_FAILURE = "DOG_API_CALL_FAILURE";

const CAT_API_CALL_REQUEST = "CAT_API_CALL_REQUEST";
const CAT_API_CALL_SUCCESS = "CAT_API_CALL_SUCCESS";
const CAT_API_CALL_FAILURE = "CAT_API_CALL_FAILURE";

function dogs(state = { dog: null, error: null, fetching: false }, action) {
  switch (action.type) {
    case DOG_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case DOG_API_CALL_SUCCESS:
      console.log("HELLO DOGS SUCCESS ", action);
      return { ...state, fetching: false, dog: action.dog, cat: null };
      break;
    case DOG_API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
      break;
    default:
      return state;
  }
}

function cats(state = { cat: null, error: null, fetching: false }, action) {
  switch (action.type) {
    case CAT_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case CAT_API_CALL_SUCCESS:
      return { ...state, fetching: false, cat: action.cat, dog: null };
      break;
    case CAT_API_CALL_FAILURE:
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
