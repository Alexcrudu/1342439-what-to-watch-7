export const AppRoute = {
  MAIN: '/',
  SIGN_IN: '/login',
  MY_LIST: '/myList',
  FILM_DETAILS: '/film/:id',
  ADD_COMMENT: '/film/:id/review',
  FILM_PLAYER: '/player/:id',
};

export const ALL_GENRES = 'All genres';

export const FilmRating = {
  AWSOME: 'Awesome',
  VERY_GOOD: 'Very good',
  GOOD: 'Good',
  NORMAL: 'Normal',
  BAD: 'Bad',
};

export const FilmTab = {
  OVERVIEW: 'Overview',
  INFORMATION: 'Details',
  REVIEWS: 'Reviews',
};

export const AythorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  FILMS: '/films',
  PROMO: '/promo',
  FAVORITE: '/favorite',
  COMMENTS: '/comments',
  LOGIN: '/login',
  LOGOUT: '/logout',
}
