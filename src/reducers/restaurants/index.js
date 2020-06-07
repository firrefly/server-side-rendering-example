// Modules
import { combineReducers } from "redux";
// Reducers
import { restaurantsListReducer } from "./list";
import { restaurantsFiltersReducer } from "./filters";
import { restaurantsSearchReducer } from "./search";
import { restaurantsUiReducer } from "./ui";

export const restaurantsReducer = combineReducers({
  list: restaurantsListReducer,
  filters: restaurantsFiltersReducer,
  search: restaurantsSearchReducer,
  ui: restaurantsUiReducer,
});
