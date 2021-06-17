import React from 'react';
import UserBlock from '../user-block/user-block';
import SvgLogo from '../svg-logo/svg-logo';
import SiteLogo from '../site-logo/site-logo';
import FilmsList from '../films-list/films-list';
import PropTypes from 'prop-types';
import Footer from '../footer/footer';
import filmProp from '../../props/film-prop';

function MyListScreen({films}) {
  return (
    <React.Fragment>
      <SvgLogo />
      <div className="user-page">
        <header className="page-header user-page__head">
          <SiteLogo />

          <h1 className="page-title user-page__title">My list</h1>

          <UserBlock />
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsList films={films.filter((film) =>film.isFavorite)} />

        </section>
        <Footer />

      </div>
    </React.Fragment>
  );
}

MyListScreen.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [filmProp],
    )).isRequired,
};


export default MyListScreen;
