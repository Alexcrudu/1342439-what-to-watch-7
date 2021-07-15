export const ActionType = {
  SET_CURRENT_GENRE: 'filters/currentGenreSet',
  SET_FILMS: 'films/filmsSet',
};

export function setCurrentGenre(genre) {
  return {
    type: ActionType.SET_CURRENT_GENRE,
    payload: genre,
  };
};

export function setFilms(films) {
  return {
    type: ActionType.SET_FILMS,
    payload: films,
  };
};
