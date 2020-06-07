// Models
import { restaurantsListModel as restaurantsListInitialState } from "@models/restaurants";
import { uiModel as uiInitialState } from "@models/ui";

export const restaurantsInitialState = {
  list: restaurantsListInitialState,
  ui: uiInitialState,
};

export { restaurantsListInitialState, uiInitialState };
