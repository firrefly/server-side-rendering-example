// Models
import {
  restaurantsListModel as restaurantsListInitialState,
  restaurantsFiltersModel as restaurantsFiltersInitialState,
  restaurantsSearchModel as restaurantsSearchInitialState,
} from "@models/restaurants";
import { uiModel as uiInitialState } from "@models/ui";

export const restaurantsInitialState = {
  list: restaurantsListInitialState,
  filters: restaurantsFiltersInitialState,
  search: restaurantsSearchInitialState,
  ui: uiInitialState,
};

export {
  restaurantsListInitialState,
  restaurantsFiltersInitialState,
  restaurantsSearchInitialState,
  uiInitialState,
};
