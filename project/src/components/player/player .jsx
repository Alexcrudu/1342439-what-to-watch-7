import React, {useEffect, useRef, useState} from 'react';
import SvgLogo from '../svg-logo/svg-logo';
import {useParams,useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import filmProp from '../../props/film-prop';

function FilmPlayerScreen ({films}) {
  const {id} =useParams();
  const {name, runTime, videoLink, previewImage} = films.find((film) =>film.id === Number(id));

const [isLoading, setIsLoading] = useState(true);
const [isPlaying, setIsPlaying] = useState(false);

const playerRef = useRef(null);
const history = useHistory();

useEffect(() => {
  playerRef.current.onloadeddata = setIsLoading(false);
  playerRef.current.onplay = setIsPlaying(true);
  playerRef.current.onpause = setIsPlaying(false);

  return () => {
    if (playerRef.current) {
      playerRef.current = null;
    }
  }
}, [videoLink]);

useEffect(() => {
  if (isPlaying) {
    playerRef.current.play();
    return;
  }

  playerRef.current.pause();
}, [isPlaying]);

function clickButtonExit() {
  setIsPlaying(false);
  history.goBack();
}

  return (
    <React.Fragment>
      <SvgLogo />
      <div className="player">
        <video ref={playerRef} src={videoLink} className="player__video" poster={previewImage}/>

        <button type="button" className="player__exit" onClick= {clickButtonExit}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="30" max="100"/>
              <div className="player__toggler" style={{left: '30%'}}>Toggler</div>
            </div>
            <div className="player__time-value">{runTime}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" disabled={isLoading} onClick={() => {setIsPlaying(!isPlaying);}}>
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
    filmProp,
  ).isRequired,
};

export default FilmPlayerScreen;
