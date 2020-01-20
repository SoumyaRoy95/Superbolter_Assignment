import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import { page } from "../reducers/page";
// import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  return createStore(
    page,
    initialState,
    compose(applyMiddleware(ReduxThunk))
  );
}