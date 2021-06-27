import React from 'react';
import PropTypes from 'prop-types';
import filmProp from '../../props/film-prop';
import {Link} from 'react-router-dom';

function MovieCard({ film, activeFilm, isPlaying, handleMouseOver, handleMouseLeave }) {
  const { id, name, previewImage } = film;
  let previewVideo;

  if(activeFilm !== null && film === activeFilm && isPlaying) {
    previewVideo = activeFilm.previewVideoLink;
  }

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() =>handleMouseOver(film)} onMouseLeave={() => handleMouseLeave()}>
      {previewVideo ? <Link to={`/films/${id}`}><video src={previewVideo} width="280" height="175" muted autoPlay/></Link>
      :
      <Link to={`/film/${id}`}>
        <div className="small-film-card__image">
          <img src={previewImage} alt={name} width="280" height="175" />
        </div>
      </Link>}
      <h3 className="small-film-card__title">
        <Link to={`/film/${id}`} className="small-film-card__link" >
          {name}
        </Link>
      </h3>
    </article>
  );
}

MovieCard.propTypes = {
  film:
      PropTypes.shape(filmProp).isRequired,
      activeFilm: filmProp,
      isPlaying: PropTypes.bool.isRequired,
      handleMouseLeave: PropTypes.func.isRequired,
      handleMouseOver: PropTypes.func.isRequired,
};

export default MovieCard;
