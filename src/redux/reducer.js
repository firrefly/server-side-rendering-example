// Modules
import { combineReducers } from "redux";
import { HYDRATE } from 'next-redux-wrapper'
// Reducers
import {
  restaurantsReducer,
  reviewsReducer,
  hitsReducer,
} from "../reducers";

export const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }

    return nextState;
  }
  
  return combineReducers({
    restaurants: restaurantsReducer,
    reviews: reviewsReducer,
    hits: hitsReducer,
  })(state, action);
};
