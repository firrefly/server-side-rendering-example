// Modules
import produce from "immer";
// Constants
import { HITS_SAVE } from "@constants/hits";
// State
import { hitsListInitialState } from "@state/hits";
// Utils
import { Consts } from "@utils";

export const hitsListReducer = (state = hitsListInitialState, { type, payload = null }) =>
  produce(state, draft => {
    switch (type) {
      case HITS_SAVE: {
        return [...payload];
      }
    }
  });

