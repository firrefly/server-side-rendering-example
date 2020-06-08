// Modules
import produce from "immer";
// Constants
import { 
  RESTAURANTS_CHANGE_FILTERS,
} from "@constants/restaurants";
// State
import { restaurantsFiltersInitialState } from "@state/restaurants";
// Utils
import { Consts } from "@utils";

export const restaurantsFiltersReducer = (
    state = restaurantsFiltersInitialState,
    { type, payload = null }
  ) =>
  produce(state, draft => {
    switch (type) {
      case RESTAURANTS_CHANGE_FILTERS: {
        const { filter, index } = payload;
        draft[filter][index].checked = !draft[filter][index].checked;
        break;
      }
    }
  });

