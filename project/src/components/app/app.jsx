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
import filmProp from '../../props/film-prop';
import reviewProp from '../../props/film-prop';

function App({films, reviews}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage films = {films} />;
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignInScreen />
        </Route>
        <Route exact path= {AppRoute.MY_LIST}>
          <MyListScreen films = {films} />
        </Route>
        <Route exact path={AppRoute.FILM_DETAILS}>
          <FilmDetailsScreen films={films} reviews={reviews}/>
        </Route>
        <Route exact path={AppRoute.ADD_COMMENT}>
          <AddCommentScreen films={films} />
        </Route>
        <Route exact path={AppRoute.FILM_PLAYER}>
          <FilmPlayerScreen films={films} />
        </Route>
        <Route>
          <NoPageScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ).isRequired,
  reviews: PropTypes.arrayOf(
    reviewProp,
  ).isRequired,
};

export default App;
