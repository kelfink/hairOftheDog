import {
  CAT_API_CALL_REQUEST,
  CAT_API_CALL_SUCCESS,
  CAT_API_CALL_FAILURE
} from "../constants/actionTypes";

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
