// Modules
import { createSelector } from "reselect";

// List
export const restaurantsListSelector = ({ restaurants }) => restaurants.list;

// Filters
export const restaurantsFiltersSelector = ({ restaurants }) => restaurants.filters;

// Search
export const restaurantsSearchSelector = ({ restaurants }) => restaurants.search.name;

// Ui
export const restaurantsUiSelector = ({ restaurants }) => restaurants.ui;
