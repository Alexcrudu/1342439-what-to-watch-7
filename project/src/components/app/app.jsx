import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SignInScreen from '../sign-in/sign-in';
import MyListScreen from '../my-list/my-list';
import FilmDetailsScreen from '../film-details/film-details';
import AddCommentScreen from '../add-comment/add-comment';
import FilmPlayerScreen from '../player/player ';
import NoPageScreen from '../no-page/no-page';
import {AppRoute} from '../../const.js';

function App({promoMovie, movies}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage promoMovie = {promoMovie} movies = {movies} />;
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignInScreen />
        </Route>
        <Route exact path= {AppRoute.MY_LIST}>
          <MyListScreen />
        </Route>
        <Route exact path={AppRoute.FILM_DETAILS}>
          <FilmDetailsScreen/>
        </Route>
        <Route exact path={AppRoute.ADD_COMMENT}>
          <AddCommentScreen/>
        </Route>
        <Route exact path={AppRoute.FILM_PLAYER}>
          <FilmPlayerScreen/>
        </Route>
        <Route>
          <NoPageScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promoMovie: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
  }).isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      moviePage: PropTypes.string.isRequired,
      previewImage: PropTypes.string.isRequired,
    })).isRequired,
};

export default App;
