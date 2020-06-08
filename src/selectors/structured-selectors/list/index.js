// Modules
import { createStructuredSelector } from "reselect";
// Selectors
import {
  restaurantsListSelector,
  restaurantsSearchSelector,
  restaurantsFoodFilterClient,
  restaurantsOptionsFilterClient,
} from "../../selectors/restaurants";

export const listStructuredSelector = createStructuredSelector({
  list: restaurantsListSelector,
  search: restaurantsSearchSelector,
  foodFilter: restaurantsFoodFilterClient,
  optionsFilter: restaurantsOptionsFilterClient,
});
