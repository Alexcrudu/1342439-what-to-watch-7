import React, {useState} from 'react';
import FilmOverview from '../film-overview/film-overview';
import FilmInformation from '../film-information/film-information';
import FilmReviews from '../film-reviews/film-reviews';
import PropTypes from 'prop-types';
import filmProp from '../../props/film-prop';
import reviewProp from '../../props/review-prop';
import {FilmTab} from '../../const';

function getCurrentFilmTab(tab, film, reviews) {
  switch(tab) {
    case FilmTab.OVERVIEW:
      return <FilmOverview film={film}/>;
    case FilmTab.INFORMATION:
      return <FilmInformation film={film}/>;
    case FilmTab.REVIEWS:
      return <FilmReviews reviews={reviews}/>
  }
};

function FilmTabs ({film, reviews}) {
  const [tab, setTab] = useState(FilmTab.OVERVIEW);

  function handleTabClick(evt) {
    evt.preventDefault();
   // console.log(evt.currentTarget)
    if(evt.currentTarget) {
      switch(evt.target.textContent) {
        case FilmTab.OVERVIEW:
          setTab(FilmTab.OVERVIEW);
          break;
        case FilmTab.INFORMATION:
          setTab(FilmTab.INFORMATION);
          break;
        case FilmTab.REVIEWS:
          setTab(FilmTab.REVIEWS);
          break;
      }
    }
  }

  return (
    <div className='film-card__desc'>
      <nav className='film-nav film-card__nav'>
        <ul className='film-nav__list' onClick={handleTabClick}>
          <li className={`film-nav__item ${tab === FilmTab.OVERVIEW ? 'film-nav__item--active' : ''}`}>
            <a href='#' className='film-nav__link'>Overview</a>
          </li>
          <li className={`film-nav__item ${tab === FilmTab.DETAILS ? 'film-nav__item--active' : ''}`}>
            <a href='#' className='film-nav__link'>Details</a>
          </li>
          <li className={`film-nav__item ${tab === FilmTab.REVIEWS ? 'film-nav__item--active' : ''}`}>
            <a href='#' className='film-nav__link'>Reviews</a>
          </li>
        </ul>
      </nav>
      {getCurrentFilmTab(tab, film, reviews)}
    </div>
  );
}

FilmTabs.propTypes = {
  film: PropTypes.shape(filmProp).isRequired,
  reviews: PropTypes.arrayOf(reviewProp).isRequired,
}

export default FilmTabs;
