// Modules
import produce from "immer";
// Constants
import {
  RESTAURANTS_PENDING,
  RESTAURANTS_SUCCESS,
  RESTAURANTS_ERROR,
} from "@constants/restaurants";
// State
import { uiInitialState } from "@state/restaurants";
// Utils
import { Consts } from "@utils";

const { PENDING, SUCCESS, ERROR } = Consts.REQUEST.UI.STATUS;

export const restaurantsUiReducer = (state = uiInitialState, { type, payload = null }) =>
  produce(state, draft => {
    switch (type) {
      case RESTAURANTS_PENDING: {
        draft.status = PENDING;
        draft.details = payload;
        break;
      }

      case RESTAURANTS_SUCCESS: {
        draft.status = SUCCESS;
        draft.details = payload;
        break;
      }

      case RESTAURANTS_ERROR: {
        draft.status = ERROR;
        draft.details = payload;
        break;
      }
    }
  });
