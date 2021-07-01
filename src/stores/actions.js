import { createAction } from "./utils";
import { LOAD_ALL_CHARACTERS, LOAD_ALL_MOVIES } from "./constants";
import axios from "axios";

export const allActions = {
  loadAllCharacters: () => (dispatch) => {
    const data = [];
    axios("https://swapi.dev/api/people").then(async (response) => {
      data.push(...response.data.results);
      let next = response.data.next;
      while (next !== null) {
        const res = await axios(next);
        data.push(...res.data.results);
        next = res.data.next;
      }
      dispatch(createAction(LOAD_ALL_CHARACTERS, data));
    });
  },

  loadAllMovies: (filmURLs) => (dispatch) => {
    Promise.all(filmURLs.map((filmURL) => axios(filmURL))).then((results) => {
      const films = results.map((result) => result.data);
      dispatch(createAction(LOAD_ALL_MOVIES, films));
    });
  },
};
