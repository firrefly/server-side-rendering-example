// Lib
import { filtersEvery } from "@lib/filters-every";

export const getIsOptions = (optionsFilter, options) => {
  return optionsFilter
    .every(filterKey => filtersEvery(filterKey, options));
};
