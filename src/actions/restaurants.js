import {
  RESTAURANTS_SAVE,
  RESTAURANTS_PENDING,
  RESTAURANTS_SUCCESS,
  RESTAURANTS_ERROR,
} from "@constants/restaurants";

export const restaurantsSave = (data = []) => ({
  type: RESTAURANTS_SAVE,
  payload: data,
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
