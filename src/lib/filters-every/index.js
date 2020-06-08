export const filtersEvery = (filterKey, options) => {
  switch (filterKey) {
    case "DeliveryCost": {
      return options[filterKey] === 0;
    }

    default:
      return false;
  }
};
