import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// import { films } from './mock/films-mock';
import { reviews } from './mock/reviews-mock';
import {Provider} from 'react-redux';
import {store} from './store/store';
import {fetchFilmsData} from './store/api-actions';

store.dispatch(fetchFilmsData());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
