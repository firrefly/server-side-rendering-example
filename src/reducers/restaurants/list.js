// Modules
import produce from "immer";
// Constants
import { RESTAURANTS_SAVE } from "@constants/restaurants";
// State
import { restaurantsListInitialState } from "@state/restaurants";
// Utils
import { Consts } from "@utils";

export const restaurantsListReducer = (state = restaurantsListInitialState, { type, payload = null }) =>
  produce(state, draft => {
    switch (type) {
      case RESTAURANTS_SAVE: {
        return [...payload];
      }
    }
  });

