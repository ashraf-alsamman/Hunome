import { combineReducers } from 'redux';
import { getSongReducer } from './SongReducer';

const rootReducer = combineReducers({
  songs: getSongReducer
});

export default rootReducer;