import {FilmRating} from './const';

export function filmRating (rating) {
  let ratingFilm ;
  if(rating >= 0 && rating < 3) {
    ratingFilm = FilmRating.BAD;
  } else if (rating >=3 && rating < 5) {
    ratingFilm = FilmRating.NORMAL;
  } else if (rating >= 5 && 8) {
    ratingFilm = FilmRating.GOOD;
  } else if(rating >=8 < 10) {
    ratingFilm = FilmRating.VERY_GOOD;
  } else if(rating ===10) {
    ratingFilm = FilmRating.AWSOME;
  }
  return ratingFilm;
}
