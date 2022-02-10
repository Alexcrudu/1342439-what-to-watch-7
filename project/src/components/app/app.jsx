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
import {connect} from 'react-redux';
import SpinnerScreen from '../spinner-screen/spinner-screen.jsx';

function App({films, reviews, isLoading}) {

  if (isLoading) {
    return (
      <SpinnerScreen />
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainPage />;
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignInScreen />
        </Route>
        <Route exact path= {AppRoute.MY_LIST}>
          <MyListScreen />
        </Route>
        <Route exact path={AppRoute.FILM_DETAILS}>
          <FilmDetailsScreen reviews={reviews}/>
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

const mapStateToProps = (state) => ({
  films: state.films,
  isLoading: state.isLoading,
});

const AppConnected = connect(mapStateToProps)(App);

App.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ).isRequired,
  reviews: PropTypes.arrayOf(
    reviewProp,
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default AppConnected;
