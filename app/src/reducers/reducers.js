import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAIL,
} from "./../actions";

const initialState = {
  character: [],
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        character: [...action.payload],
        isFetching: false,
        error: "",
      };
    case FETCH_CHARACTER_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
