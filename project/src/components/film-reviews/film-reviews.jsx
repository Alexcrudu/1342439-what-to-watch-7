import React from 'react';
import PropTypes from 'prop-types';
import reviewProp from '../../props/review-prop';
import {getRandomInt, getRandomElements} from '../../utils';
import Review from '../review/review.jsx';

function FilmReviews ({reviews}) {
  const filmReviews = getRandomElements(reviews, getRandomInt(0, reviews.length));

  const filmReviewsRow = filmReviews.slice(0, Math.round(filmReviews.length / 2));

  const filmReviewsCol = filmReviews.slice(filmReviews.length - Math.round(filmReviews.length / 2) + 1);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {filmReviewsRow.map((filmReview) => <Review key={filmReview.id} review={filmReview} />)}
      </div>
      <div className="film-card__reviews-col">
        {filmReviewsCol.map((filmReview) => <Review key={filmReview.id} review={filmReview} />)}
      </div>
    </div>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    reviewProp
  ).isRequired,
};

export default FilmReviews;
