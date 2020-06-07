// Modules
import { combineReducers } from "redux";
import { HYDRATE } from 'next-redux-wrapper'
// Reducers
import { restaurantsReducer } from "../reducers";

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
  })(state, action);
};
