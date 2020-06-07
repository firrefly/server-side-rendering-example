import { Consts } from "@utils";

const { PREFIX } = Consts.ACTIONS;

export const RESTAURANTS_SAVE = `${PREFIX}restaurants/save`;

export const RESTAURANTS_CHANGE_SEARCH = `${PREFIX}restaurants/change-search`;
export const RESTAURANTS_CHANGE_FILTERS = `${PREFIX}restaurants/change-filters`;

export const RESTAURANTS_PENDING = `${PREFIX}restaurants/pending`;
export const RESTAURANTS_SUCCESS = `${PREFIX}restaurants/success`;
export const RESTAURANTS_ERROR = `${PREFIX}restaurants/error`;
