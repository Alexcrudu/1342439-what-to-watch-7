import React from 'react';
import {Link, useParams, useHistory, Redirect} from 'react-router-dom';
import UserBlock from '../user-block/user-block';
import SvgLogo from '../svg-logo/svg-logo';
import SiteLogo from '../site-logo/site-logo';
import PropTypes from 'prop-types';
import filmProp from '../../props/film-prop';
import reviewsProp from '../../props/review-prop';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
// import {filmRating} from '../../utils';
import FilmTabs from '../film-tabs/film-tabs';
import {connect} from 'react-redux';

const MAX_SHOWED_FILMS = 4;

function getSameGanreFilm(films, currentFilm) {
  if(films.length < MAX_SHOWED_FILMS) {
    return films.filter((film) =>film !== currentFilm).filter((film)=> film.genre === currentFilm.genre).slice(0, films.length);
  }

  return films.filter((film) => film !== currentFilm).filter((film) => film.genre === currentFilm.genre).slice(0, MAX_SHOWED_FILMS);
}

function FilmDetailsScreen({ films, reviews}) {
  const {id} = useParams();

  const film = films.find((film)=> film.id === Number(id))

  if(!film) {
    return(
      <Redirect to=""/>
    )
  }

  const {name, posterImage, backgroundImage, genre, released} = film;
  return (
    <React.Fragment>
      <SvgLogo />
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <SiteLogo />
            <UserBlock />
          </header>

          <div className="film-card__wrap">
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
                      <use xlinkHref="#play-s"/>
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/film/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <FilmTabs film={film} reviews={reviews}/>

            {/* <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{filmRating({rating})}</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
                  Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.
                </p>
                <p>Gustave prides himself on providing first-class service to the hotel`s guests, including satisfying
                  the sexual needs of the many elderly women who stay there. When one of Gustave`s lovers dies
                  mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
                  murder.
                </p>

                <p className="film-card__director"><strong>Director: {director}</strong></p>

                <p className="film-card__starring">
                  <strong>
                    Starring: {starring.join(', ')} and other
                  </strong>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <FilmsList films={getSameGanreFilm(films, film)} />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  films: state.films,
});

const FilmDetailsScreenConnected = connect(mapStateToProps)(FilmDetailsScreen)

FilmDetailsScreen.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ).isRequired,
  reviews: PropTypes.arrayOf(
    reviewsProp,
  ).isRequired,
};

export default FilmDetailsScreenConnected;
