// Modules
import { createStructuredSelector } from "reselect";
// Selectors
import { contentFiltersSelector } from "../../selectors/content";

export const listStructuredSelector = createStructuredSelector({
  list: contentFiltersSelector,
});
