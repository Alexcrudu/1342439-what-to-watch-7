import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mock/films-mock';
import { reviews } from './mock/reviews-mock';

ReactDOM.render(
  <React.StrictMode>
    <App films={films} reviews={reviews}/>
  </React.StrictMode>,
  document.getElementById('root'),
);
