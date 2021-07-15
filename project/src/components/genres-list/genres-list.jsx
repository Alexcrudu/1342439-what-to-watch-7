import React from 'react';
import { connect } from 'react-redux';
import {setCurrentGenre} from '../../store/action.js';
import PropTypes from 'prop-types';
import filmProp from '../../props/film-prop';
import {ALL_GENRES} from '../../const';

const getGenres = (films) => {
  const genres = new Set(films.map((film) => film.genre));
  return [ALL_GENRES, ...Array.from(genres)];
};

function GenreList(props) {
  const {currentGenre, films, onGenresClick} = props;

  return (
    <ul className="catalog__genres-list" onClick={onGenresClick}>
      {getGenres(films).map((genre) => (
        <li key={genre} className={`catalog__genres-item ${currentGenre === genre ? 'catalog__genres-item--active' : ''}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onGenresClick(evt) {
    evt.preventDefault();
    if(evt.target.matches('a')) {
      dispatch(setCurrentGenre(evt.target.textContent));
    }
  },
});

const GenresListConnected = connect(mapStateToProps, mapDispatchToProps)(GenreList);

export default GenresListConnected;
