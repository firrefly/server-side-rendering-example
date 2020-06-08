// Modules
import { createSelector } from "reselect";

// List
export const restaurantsListSelector = ({ restaurants }) => restaurants.list;

// Filters
export const restaurantsFiltersSelector = ({ restaurants }) => restaurants.filters;
export const restaurantsFoodFiltersSelector = createSelector(
  restaurantsFiltersSelector,
  ({ foodList }) => foodList,
);
export const restaurantsOptionsFiltersSelector = createSelector(
  restaurantsFiltersSelector,
  ({ options }) => options,
);

export const restaurantsFoodFilterClient = createSelector(
  restaurantsFoodFiltersSelector,
  list => list
    .filter(({ checked }) => !!checked)
    .map(({ name }) => name),
);

export const restaurantsOptionsFilterClient = createSelector(
  restaurantsOptionsFiltersSelector,
  list => list
    .filter(({ checked }) => !!checked)
    .map(({ id }) => id),
);

export const restaurantsFiltersChecked = createSelector(
  [
    restaurantsFoodFilterClient,
    restaurantsOptionsFilterClient,
  ],
  (foodFilter, optionsFilter) => ({ foodFilter, optionsFilter }),
);

// Search
export const restaurantsSearchSelector = ({ restaurants }) => restaurants.search.name;
export const restaurantsValidSearchSelector = createSelector(
  restaurantsSearchSelector,
  (name = '') => {
    const validName = name.trim();

    return validName.length 
      ? validName.toUpperCase() : null;
  }
);

// Ui
export const restaurantsUiSelector = ({ restaurants }) => restaurants.ui;
