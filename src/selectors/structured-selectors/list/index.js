// Modules
import { createStructuredSelector } from "reselect";
// Selectors
import { restaurantsListSelector } from "../../selectors/restaurants";

export const listStructuredSelector = createStructuredSelector({
  list: restaurantsListSelector,
});
