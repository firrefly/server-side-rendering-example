// Modules
import { combineReducers } from "redux";
// Reducers
import { reviewsListReducer } from "./list";
import { reviewsUiReducer } from "./ui";

export const reviewsReducer = combineReducers({
  list: reviewsListReducer,
  ui: reviewsUiReducer,
});
