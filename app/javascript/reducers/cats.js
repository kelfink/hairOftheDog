// action types
const CAT_API_CALL_REQUEST = "CAT_API_CALL_REQUEST";
const CAT_API_CALL_SUCCESS = "CAT_API_CALL_SUCCESS";
const CAT_API_CALL_FAILURE = "CAT_API_CALL_FAILURE";

const initialState = {
  fetching: false,
  dog: null,
  cat: null,
  error: null
};

export default function cats(state = initialState, action) {
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
