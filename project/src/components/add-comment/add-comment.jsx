import React from 'react';
import UserBlock from '../user-block/user-block';
import SvgLogo from '../svg-logo/svg-logo';
import SiteLogo from '../site-logo/site-logo';
import {Link, useParams, useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import filmProp from '../../props/film-prop';
import Rating from '../rating/rating';

function AddCommentScreen({films, reviews}) {
  const [filmStars, setFilmStars] = useState(0);
  const [commenText, setCommentText] = useState('');
  const {id} = useParams();
  const history = useHistory();

  const film = films.find((film) => film.id === Number(id));
if (!film) {
  history.push('');
}
  const {name, backgroundImage, posterImage} = films.find((film) => film.id === Number(id));

  function handleStarsChange(e) {
    setFilmStars(Number(e.target.value));
  }

  function handleCommentChange(e) {
    e.preventDefault();
    setCommentText(e.target.value);
  }

  return (
    <React.Fragment>
      <SvgLogo />
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <SiteLogo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link  to={`/film/${id}`} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a href={`/film/${id}/review`} className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock />
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={posterImage} alt={name} width="218" height="327"/>
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <Rating filmStars = {filmStars} handleStarsChange= {handleStarsChange} />
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleCommentChange} value={commenText}/>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">Post</button>
              </div>
            </div>
          </form>
        </div>

      </section>
    </React.Fragment>
  );
}

AddCommentScreen.propTypes = {
  films: PropTypes.arrayOf(
    filmProp,
  ).isRequired,
};

export default AddCommentScreen;
