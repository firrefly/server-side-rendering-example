// Modules
import { createStructuredSelector } from "reselect";
// Selectors
import {
  restaurantsOptionsFiltersSelector,
  restaurantsFoodFiltersSelector,
} from "../../selectors/restaurants";

export const filtersStructuredSelector = createStructuredSelector({
  optionsFilters: restaurantsOptionsFiltersSelector,
  foodFilters: restaurantsFoodFiltersSelector,
});
