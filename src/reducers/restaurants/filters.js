// Modules
import produce from "immer";
// Constants
// State
import { restaurantsFiltersInitialState } from "@state/restaurants";
// Utils
import { Consts } from "@utils";

export const restaurantsFiltersReducer = (state = restaurantsFiltersInitialState, { type, payload = null }) =>
  produce(state, draft => {
    switch (type) {
    }
  });

