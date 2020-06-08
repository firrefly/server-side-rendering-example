export const filtersEvery = (filterKey, options) => {
  switch (filterKey) {
    case "MinCost": {
      return options[filterKey] === 0;
    }

    default:
      return false;
  }
};
