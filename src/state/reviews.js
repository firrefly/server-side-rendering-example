// Models
import { reviewsListModel as reviewsListInitialState } from "@models/reviews";
import { uiModel as uiInitialState } from "@models/ui";

export const reviewsInitialState = {
  list: reviewsListInitialState,
  ui: uiInitialState,
};

export { reviewsListInitialState, uiInitialState };
