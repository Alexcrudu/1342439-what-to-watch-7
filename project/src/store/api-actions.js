import {APIRoute} from '../const.js';
import {filmsFetchData, filmsSetData} from './action.js';


const adaptFilmData = (serverData) => (
  serverData.map((film) => {
    const adaptedFilm = {
      ...film,
      backgroundImage: film['background_image'],
      backgroundColor: film['background_color'],
      isFavorite: film['is_favorite'],
      posterImage: film['poster_image'],
      previewImage: film['preview_image'],
      scoresCount: film['scores_count'],
      runTime: film['run_time'],
      previewVideoLink: film['preview_video_link'],
      videoLink: film['video_link'],
    };

    delete adaptedFilm.background_image;
    delete adaptedFilm.background_color;
    delete adaptedFilm.is_favorite;
    delete adaptedFilm.poster_image;
    delete adaptedFilm.preview_image;
    delete adaptedFilm.scores_count;
    delete adaptedFilm.run_time;
    delete adaptedFilm.preview_video_link;
    delete adaptedFilm.video_link;

    return adaptedFilm;
  })
);

export const fetchFilmsData = () => (dispatch, _getState, api) => {
  dispatch(filmsFetchData());
  api.get(APIRoute.FILMS).then(({data}) => {
    dispatch(filmsSetData(adaptFilmData(data)))
  });
}
