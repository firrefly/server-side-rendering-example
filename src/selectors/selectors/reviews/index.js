// Modules
import { createSelector } from "reselect";

// List
export const reviewsListSelector = ({ reviews }) => reviews.list;

// Ui
export const reviewsFiltersSelector = ({ reviews }) => reviews.ui;
