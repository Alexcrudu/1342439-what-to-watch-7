import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer.js';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createApi} from '../services/api.js';

const api = createApi(()=> {});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))),
);

export {store};
