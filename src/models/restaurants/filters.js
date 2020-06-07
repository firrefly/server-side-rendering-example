// Utils
import { Consts } from "@utils";

const { FILTERS_NAME } = Consts.FILTERS;

export const restaurantsFiltersModel = FILTERS_NAME
  .map((name, index) => ({
    id: `filter_id_${index}`,
    name, 
    checked: false,
  }));
