import {
  DOG_API_CALL_REQUEST,
  DOG_API_CALL_SUCCESS,
  DOG_API_CALL_FAILURE
} from "../constants/actionTypes";

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
