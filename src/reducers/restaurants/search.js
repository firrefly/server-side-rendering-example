// Modules
import produce from "immer";
// Constants
// State
import { restaurantsSearchInitialState } from "@state/restaurants";
// Utils
import { Consts } from "@utils";

export const restaurantsSearchReducer = (state = restaurantsSearchInitialState, { type, payload = null }) =>
  produce(state, draft => {
    switch (type) {
    }
  });

