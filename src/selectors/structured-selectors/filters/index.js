// Modules
import { createStructuredSelector } from "reselect";
// Selectors
import { restaurantsFiltersSelector } from "../../selectors/restaurants";

export const filtersStructuredSelector = createStructuredSelector({
  filters: restaurantsFiltersSelector,
});
