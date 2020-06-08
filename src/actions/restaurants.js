import {
  RESTAURANTS_SAVE,
  RESTAURANTS_CHANGE_SEARCH,
  RESTAURANTS_CHANGE_FILTERS,
  RESTAURANTS_CHANGE_OPTIONS_FILTERS,
  RESTAURANTS_PENDING,
  RESTAURANTS_SUCCESS,
  RESTAURANTS_ERROR,
} from "@constants/restaurants";

export const restaurantsSave = (data = []) => ({
  type: RESTAURANTS_SAVE,
  payload: data,
});

export const restaurantsChangeSearch = (search = "") => ({
  type: RESTAURANTS_CHANGE_SEARCH,
  payload: search,
});

export const restaurantsChangeFilters = (filter, index) => ({
  type: RESTAURANTS_CHANGE_FILTERS,
  payload: { filter, index },
});

export const restaurantsPending = (details = null) => ({
  type: RESTAURANTS_PENDING,
  payload: details,
});

export const restaurantsSuccess = (details = null) => ({
  type: RESTAURANTS_SUCCESS,
  payload: details,
});

export const restaurantsError = (details = null) => ({
  type: RESTAURANTS_ERROR,
  payload: details,
});
