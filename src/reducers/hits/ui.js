// Modules
import produce from "immer";
// Constants
import {
  HITS_PENDING,
  HITS_SUCCESS,
  HITS_ERROR,
} from "@constants/hits";
// State
import { uiInitialState } from "@state/hits";
// Utils
import { Consts } from "@utils";

const { PENDING, SUCCESS, ERROR } = Consts.REQUEST.UI.STATUS;

export const hitsUiReducer = (state = uiInitialState, { type, payload = null }) =>
  produce(state, draft => {
    switch (type) {
      case HITS_PENDING: {
        draft.status = PENDING;
        draft.details = payload;
        break;
      }

      case HITS_SUCCESS: {
        draft.status = SUCCESS;
        draft.details = payload;
        break;
      }

      case HITS_ERROR: {
        draft.status = ERROR;
        draft.details = payload;
        break;
      }
    }
  });
