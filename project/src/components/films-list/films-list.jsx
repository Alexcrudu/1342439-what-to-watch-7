import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import filmProp from '../../props/film-prop';

function FilmsList ({films}) {
  const [activeFilm, setActiveFilm] = useState(null);

  function handleMouseOver (film) {
    setActiveFilm(film);
    return activeFilm;
  }

  return(
    <div className= "catalog__films-list">
      {films.map((film) => <MovieCard key={film.name+ film.id} film={film} handleMouseOver={handleMouseOver} />)}
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [filmProp],
    )).isRequired,
};

export default FilmsList;
