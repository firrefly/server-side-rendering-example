import {
  REVIEWS_SAVE,
  REVIEWS_PENDING,
  REVIEWS_SUCCESS,
  REVIEWS_ERROR,
} from "@constants/reviews";

export const reviewsSave = (data = []) => ({
  type: REVIEWS_SAVE,
  payload: data,
});

export const reviewsPending = (details = null) => ({
  type: REVIEWS_PENDING,
  payload: details,
});

export const reviewsSuccess = (details = null) => ({
  type: REVIEWS_SUCCESS,
  payload: details,
});

export const reviewsError = (details = null) => ({
  type: REVIEWS_ERROR,
  payload: details,
});
