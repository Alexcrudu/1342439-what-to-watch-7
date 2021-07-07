import { ActionType} from './action.js';
import {films} from '../mock/films-mock';

const FILMS_PER_STEP = 8;

const initialState = {
  currentGenre: 'All genres',
  films: films,
  maxRenderedFilms: FILMS_PER_STEP,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ActionType.SET_CURRENT_GENRE:
      return {
        ...state,
        currentGenre: action.payload,
        films: state.films.map((film) => ({
          ...film,
          starring: [...film.starring,],
        })),
      };
    case ActionType.SET_FILMS:
      return {
        ...state,
        films: action.payload.films,
      };
    case ActionType.ADD_RENDERED_FILMS_PER_STEP:
      return {
        ...state,
        films: state.films.map((film) => ({
          ...film,
          starring: [
            ...film.starring,
          ],
        })),
        maxRenderedFilms: state.maxRenderedFilms + FILMS_PER_STEP,
      };
    case ActionType.RESET_FILMS_PER_STEP:
      return {
        ...state,
        films: state.films.map((film) => ({
          ...film,
          starring: [
            ...film.starring,
          ],
        })),
        maxRenderedFilms: FILMS_PER_STEP,
      };
    default:
      return state;
  }
};

export { reducer };
