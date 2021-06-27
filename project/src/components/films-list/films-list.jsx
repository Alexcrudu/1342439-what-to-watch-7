import React, { useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import filmProp from '../../props/film-prop';

function FilmsList ({films}) {
  const [activeFilm, setActiveFilm] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false)

  function handleMouseOver (film) {
    setActiveFilm(film);
  }

  function handleMouseLeave() {
    setActiveFilm(null);
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsPlaying(true), 1000)
    return () => {
      setIsPlaying(false);
      clearTimeout(timer);
    };
  }, [activeFilm])

  return(
    <div className= "catalog__films-list">
      {films.map((film) => <MovieCard key={film.name+ film.id} film={film} activeFilm={activeFilm} isPlaying={isPlaying} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave}/>)}
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ).isRequired,
};

export default FilmsList;
