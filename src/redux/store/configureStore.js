import {applyMiddleware, createStore}   from 'redux';
import thunk                            from 'redux-thunk';
import RootReducer                      from '../reducers';

export default function configureStore(initialState) {
  return createStore(RootReducer,  {Reducer: initialState}, applyMiddleware(thunk));
}