
import { combineReducers } from 'redux';
import imagesListReducer from './imagesList.reducer'

// Combine with other reducers we may add in the future
const appReducers = combineReducers({
  imagesList: imagesListReducer
});

export default appReducers