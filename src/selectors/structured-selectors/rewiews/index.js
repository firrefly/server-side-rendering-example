// Modules
import { createStructuredSelector } from "reselect";
// Selectors
import { reviewsListSelector } from "../../selectors/reviews";

export const rewiewsStructuredSelector = createStructuredSelector({
  rewiews: reviewsListSelector,
});
