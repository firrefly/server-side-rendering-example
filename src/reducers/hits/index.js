// Modules
import { combineReducers } from "redux";
// Reducers
import { hitsListReducer } from "./list";
import { hitsUiReducer } from "./ui";

export const hitsReducer = combineReducers({
  list: hitsListReducer,
  ui: hitsUiReducer,
});
