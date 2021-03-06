import React from 'react';
// import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import UserBlock from '../user-block/user-block';
import SvgLogo from '../svg-logo/svg-logo';
import SiteLogo from '../site-logo/site-logo';
import Footer from '../footer/footer';
import FilmsList from '../films-list/films-list';
import filmProp from '../../props/film-prop';
import {Link} from 'react-router-dom';
import GenresList from '../genres-list/genres-list';
import {connect} from 'react-redux';
import {ALL_GENRES} from '../../const';

function getFilmsByGenre(films, genre) {
  if(genre === ALL_GENRES) {
    return films;
  }

  return films.filter((film) => film.genre === genre);
}


function MainPage({films, currentGenre}) {
  const {id, name, genre, released, backgroundImage, posterImage} = films[0];
  return (
    <React.Fragment>
      <SvgLogo/>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={backgroundImage}
            alt={name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <SiteLogo/>
          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={posterImage}
                alt={name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${id}`}>
                  <button className="btn btn--play film-card__button" type="button">
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {/* <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Kids & Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                Thrillers
              </a>
            </li>
          </ul> */}
          <GenresList />

          <FilmsList films={getFilmsByGenre(films, currentGenre)} />

          {/* <div className="catalog__more">
            <button className="catalog__button" type="button">
              Show more
            </button>
          </div> */}
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  films: state.films,
});

const MainPageConnected = connect(mapStateToProps)(MainPage)

MainPage.propTypes = {
  currentGenre: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(
    filmProp,
  ).isRequired,
};

export default MainPageConnected;
