import React, { useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import filmProp from '../../props/film-prop';
import {connect} from 'react-redux';


const FILMS_PER_STEP = 8;
const FILMS_LIMIT_PER_STEP = 8;
function FilmsList ({films, currentGenre}) {
  const [activeFilm, setActiveFilm] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [renderedFilmPerStep, setRenderedFilmPerStep] = useState(FILMS_LIMIT_PER_STEP)

  function handleMouseOver (film) {
    setActiveFilm(film);
  }

  function handleMouseLeave() {
    setActiveFilm(null);
  }

  function handleShowMoreClick() {
    setRenderedFilmPerStep(renderedFilmPerStep + FILMS_PER_STEP)
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsPlaying(true), 1000)
    return () => {
      setIsPlaying(false);
      clearTimeout(timer);
    };
  }, [activeFilm]);

  useEffect(() => {
    setRenderedFilmPerStep(FILMS_LIMIT_PER_STEP);
  }, [currentGenre])

  return(
    <>
      <div className= "catalog__films-list">
        {films.slice(0, renderedFilmPerStep).map((film) => <MovieCard key={film.name+ film.id} film={film} activeFilm={activeFilm} isPlaying={isPlaying} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave}/>)}
      </div>
      {renderedFilmPerStep < films.length &&
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={handleShowMoreClick}>Show more</button>
      </div>}
    </>
  );
}

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
});


const FilmsListConnected = connect(mapStateToProps)(FilmsList)

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ).isRequired,
  currentGenre: PropTypes.string.isRequired,
};

export default FilmsListConnected;
