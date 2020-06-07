// Models
import { hitsListModel as hitsListInitialState } from "@models/hits";
import { uiModel as uiInitialState } from "@models/ui";

export const hitsInitialState = {
  list: hitsListInitialState,
  ui: uiInitialState,
};

export { hitsListInitialState, uiInitialState };
