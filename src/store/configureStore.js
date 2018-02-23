import modules from './modules';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(modules, applyMiddleware(thunk));
}