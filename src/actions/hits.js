import {
  HITS_SAVE,
  HITS_PENDING,
  HITS_SUCCESS,
  HITS_ERROR,
} from "@constants/hits";

export const hitsSave = (data = []) => ({
  type: HITS_SAVE,
  payload: data,
});

export const hitsPending = (details = null) => ({
  type: HITS_PENDING,
  payload: details,
});

export const hitsSuccess = (details = null) => ({
  type: HITS_SUCCESS,
  payload: details,
});

export const hitsError = (details = null) => ({
  type: HITS_ERROR,
  payload: details,
});
