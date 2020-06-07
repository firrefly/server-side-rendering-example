// Modules
import produce from "immer";
// Constants
import {
  REVIEWS_PENDING,
  REVIEWS_SUCCESS,
  REVIEWS_ERROR,
} from "@constants/reviews";
// State
import { uiInitialState } from "@state/reviews";
// Utils
import { Consts } from "@utils";

const { PENDING, SUCCESS, ERROR } = Consts.REQUEST.UI.STATUS;

export const reviewsUiReducer = (state = uiInitialState, { type, payload = null }) =>
  produce(state, draft => {
    switch (type) {
      case REVIEWS_PENDING: {
        draft.status = PENDING;
        draft.details = payload;
        break;
      }

      case REVIEWS_SUCCESS: {
        draft.status = SUCCESS;
        draft.details = payload;
        break;
      }

      case REVIEWS_ERROR: {
        draft.status = ERROR;
        draft.details = payload;
        break;
      }
    }
  });
