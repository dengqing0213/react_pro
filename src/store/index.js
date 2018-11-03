import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import homedata from '@/components/Home/store';
import kinddata from '@/components/Kind/store';
const reducer = combineReducers({
  homedata,
  kinddata
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
