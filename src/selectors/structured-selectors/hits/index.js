// Modules
import { createStructuredSelector } from "reselect";
// Selectors
import { hitsListSelector } from "../../selectors/hits";

export const hitsStructuredSelector = createStructuredSelector({
  hits: hitsListSelector,
});
