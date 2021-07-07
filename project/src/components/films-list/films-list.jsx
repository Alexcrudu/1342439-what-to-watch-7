import React, { useState , useEffect} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import filmProp from '../../props/film-prop';
import {connect} from 'react-redux';
import {addRenderedFilmsPerStep} from '../../store/action.js';

function FilmsList ({films, maxRenderedFilms, onLimitCountChange}) {
  const [activeFilm, setActiveFilm] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false)

  function handleMouseOver (film) {
    setActiveFilm(film);
  }

  function handleMouseLeave() {
    setActiveFilm(null);
  }

  function handleShowMoreClick() {
    onLimitCountChange();
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsPlaying(true), 1000)
    return () => {
      setIsPlaying(false);
      clearTimeout(timer);
    };
  }, [activeFilm])

  return(
    <>
      <div className= "catalog__films-list">
        {films.slice(0, maxRenderedFilms).map((film) => <MovieCard key={film.name+ film.id} film={film} activeFilm={activeFilm} isPlaying={isPlaying} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave}/>)}
      </div>
      {maxRenderedFilms < films.length &&
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={handleShowMoreClick}>Show more</button>
      </div>}
    </>
  );
}

const mapStateToProps = (state) => ({
  maxRenderedFilms: state.maxRenderedFilms,
});

const mapDispatchToProps = (dispatch) => ({
  onLimitCountChange() {
    dispatch(addRenderedFilmsPerStep());
  },
});

const FilmsListConnected = connect(mapStateToProps, mapDispatchToProps)(FilmsList)

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ).isRequired,
  maxRenderedFilms: PropTypes.number.isRequired,
  onLimitCountChange: PropTypes.func.isRequired,
};

export default FilmsListConnected;
