export const ActionType = {
  SET_CURRENT_GENRE: 'filters/currentGenreSet',
  SET_FILMS: 'films/filmsSet',
  ADD_RENDERED_FILMS_PER_STEP: 'films/renderedFilmsPerStep',
  RESET_FILMS_PER_STEP: 'films/renderedFilmsPerStepReset'
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

export function addRenderedFilmsPerStep() {
  return {
    type: ActionType.ADD_RENDERED_FILMS_PER_STEP,
  };
};

export function resetFilmsPerStep () {
  return {
    type: ActionType.RESET_FILMS_PER_STEP,
  };
};
