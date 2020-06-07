// Modules
import produce from "immer";
// Constants
import { REVIEWS_SAVE } from "@constants/reviews";
// State
import { reviewsListInitialState } from "@state/reviews";
// Utils
import { Consts } from "@utils";

export const reviewsListReducer = (state = reviewsListInitialState, { type, payload = null }) =>
  produce(state, draft => {
    switch (type) {
      case REVIEWS_SAVE: {
        return [...payload];
      }
    }
  });

