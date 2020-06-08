// Modules
import memoize from "fast-memoize";
// Lib
import { getIsSearch } from "./get-is-search";
import { getIsFood } from "./get-is-food";
import { getIsOptions } from "./get-is-options";

const memoizeGetIsSearch = memoize(getIsSearch);
const memoizeGetIsFood = memoize(getIsFood);
const memoizeGetIsOptions = memoize(getIsOptions);

export const getList = (data = {}, cb, updateIsLoad) => {
  updateIsLoad(true);

  const {
    list,
    search,
    foodFilter,
    optionsFilter,
  } = data;

  setTimeout(() => {
    const newList = list.filter(({ Name, Specializations, ...options }) => {
      const isSearch = memoizeGetIsSearch(search, Name);
      const isFood = memoizeGetIsFood(foodFilter, Specializations);
      const isOptions = memoizeGetIsOptions(optionsFilter, options);
  
      return isSearch && isFood && isOptions;
    });
  
    updateIsLoad(false);
    return cb(newList);
  }, 250)
};
