export const ActionType = {
  SET_CURRENT_GENRE: 'filters/currentGenreSet',
  FILMS_FETCH_DATA: 'data/filmsFetchData',
  SET_FILMS_DATA: 'data/filmsSetData'
};

export function setCurrentGenre(genre) {
  return {
    type: ActionType.SET_CURRENT_GENRE,
    payload: genre,
  };
};

export function filmsFetchData() {
  return {
    type: ActionType.FILMS_FETCH_DATA,
  };
};

export function filmsSetData(films) {
  return {
    type: ActionType.SET_FILMS_DATA,
    payload: films,
  }
}
