import React from 'react';
import PropTypes from 'prop-types';

function Rating({filmStars, handleStarsChange}) {
  const stars = [];

  for (let i = 10; i>0; i--) {
    if (filmStars === i) {
      stars.push(
        <React.Fragment>
          <input className="rating__input"  id={`star-${i}`} type="radio" name="rating" value={i} checked/>
          <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
        </React.Fragment>,
      );
    } else {
      stars.push(
        <React.Fragment>
          <input className="rating__input" id={`star-${i}`} type="radio" name="rating" value={i}/>
          <label className="rating__label" htmlFor={`star-${i}`}>Rating {i}</label>
        </React.Fragment>,
      );
    }
  }
  return (
    <div className="rating__stars" onChange={handleStarsChange}>
      {stars}
    </div>
  )
}

Rating.PropTypes = {
  filmStars: PropTypes.number.isRequired,
  handleStarsChange: PropTypes.func.isRequired,
}

export default Rating;
