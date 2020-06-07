// Modules
import { combineReducers } from "redux";
// Reducers
import { restaurantsListReducer } from "./list";
import { restaurantsUiReducer } from "./ui";

export const restaurantsReducer = combineReducers({
  list: restaurantsListReducer,
  ui: restaurantsUiReducer,
});
