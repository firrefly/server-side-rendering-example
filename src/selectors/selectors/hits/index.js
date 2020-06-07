// Modules
import { createSelector } from "reselect";

// List
export const hitsListSelector = ({ hits }) => hits.list;

// Ui
export const hitsFiltersSelector = ({ hits }) => hits.ui;
