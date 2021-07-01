import { LOAD_ALL_CHARACTERS, LOAD_ALL_MOVIES } from "./constants";

const initialState = {
  characters: [],
  movies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case LOAD_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
