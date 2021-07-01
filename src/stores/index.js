import { combineReducers } from "redux";
import charactersAndMoviesReducer from "./reducer";

const reducers = {
  charactersAndMovies: charactersAndMoviesReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
