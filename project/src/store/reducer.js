import { ActionType} from './action.js';
import {films} from '../mock/films-mock';


const initialState = {
  currentGenre: 'All genres',
  films: films,
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
    default:
      return state;
  }
};

export { reducer };
