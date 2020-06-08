// Modules
import { createSelector } from "reselect";
import { keys } from "lodash";
// Lib
import { filtersEvery } from "@lib/filters-every";
// Selectors
import {
  restaurantsListSelector,
  restaurantsValidSearchSelector,
  restaurantsFiltersChecked,
} from "../restaurants";

export const contentFiltersSelector = createSelector(
  [
    restaurantsListSelector,
    restaurantsValidSearchSelector,
    restaurantsFiltersChecked,
  ],
  (list, search, filters) => {
    return list.filter(({ Name, Specializations, ...options }) => {
      const isSearch = search 
        ? Name
          .toUpperCase()
          .indexOf(search) !== -1
        : true;

      const isFood = filters.foodFilter.length 
        ? Specializations
          .some(({ Name }) => filters.foodFilter.includes(Name))
        : true;
      
      const isOptions = filters.optionsFilter
        .every(filterKey => filtersEvery(filterKey, options));

      return isSearch && isFood && isOptions;
    });
  }
);
