import React from 'react';
import {filmRating} from '../../utils';
import PropTypes from 'prop-types';
import filmProp from '../../props/film-prop';

function FilmOverview ({film}) {
  const {rating, scoresCount, description, director, starring} = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{filmRating(rating)}</span>
          <span className="film-rating__count">{scoresCount} {scoresCount > 1 ? 'ratings' : 'rating'}</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.join(', ')} and other
          </strong>
        </p>
      </div>
    </>
  );
}

FilmOverview.propTypes = {
  film:  PropTypes.shape(filmProp).isRequired,
};


export default FilmOverview;
