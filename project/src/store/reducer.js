import { ActionType} from './action.js';
// import {films} from '../mock/films-mock';


const initialState = {
  currentGenre: 'All genres',
  isLoading: false,
  films: [],
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
    case ActionType.FILMS_FETCH_DATA:
      return {
        ...state,
        isLoading: true,
        films: state.films.map((film) => ({
          ...film,
          starring: [
            ...film.starring,
          ],
        })),
      };
    case ActionType.SET_FILMS_DATA:
      return {
        ...state,
        isLoading: false,
        films: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
