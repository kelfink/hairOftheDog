// action types
const DOG_API_CALL_REQUEST = "DOG_API_CALL_REQUEST";
const DOG_API_CALL_SUCCESS = "DOG_API_CALL_SUCCESS";
const DOG_API_CALL_FAILURE = "DOG_API_CALL_FAILURE";

const initialState = {
  fetching: false,
  dog: null,
  cat: null,
  error: null
};

export default function dogs(state = initialState, action) {
  switch (action.type) {
    case DOG_API_CALL_REQUEST:
      return { ...state, fetching: true, error: null };
      break;
    case DOG_API_CALL_SUCCESS:
      return { ...state, fetching: false, dog: action.dog, cat: null };
      break;
    case DOG_API_CALL_FAILURE:
      return { ...state, fetching: false, dog: null, error: action.error };
      break;
    default:
      return state;
  }
}
