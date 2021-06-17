import React from 'react';
import SvgLogo from '../svg-logo/svg-logo';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import filmProp from '../../props/film-prop';

function FilmPlayerScreen ({films}) {
  const {id} =useParams();
  const {name, runTime, videoLink} = films.find((film) =>film.id === Number(id));
  return (
    <React.Fragment>
      <SvgLogo />
      <div className="player">
        <video src={videoLink} className="player__video" poster="img/player-poster.jpg"/>

        <button type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"/>
              <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
            </div>
            <div className="player__time-value">{runTime}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"/>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{name}</div>

            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"/>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

FilmPlayerScreen.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [filmProp],
    )).isRequired,
};

export default FilmPlayerScreen;
