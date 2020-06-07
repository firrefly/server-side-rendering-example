// Modules
import produce from "immer";
// Constants
import { RESTAURANTS_CHANGE_SEARCH } from "@constants/restaurants";
// State
import { restaurantsSearchInitialState } from "@state/restaurants";
// Utils
import { Consts } from "@utils";

export const restaurantsSearchReducer = (state = restaurantsSearchInitialState, { type, payload = null }) =>
  produce(state, draft => {
    switch (type) {
      case RESTAURANTS_CHANGE_SEARCH: {
        draft.name = payload;
        break;
      }
    }
  });

