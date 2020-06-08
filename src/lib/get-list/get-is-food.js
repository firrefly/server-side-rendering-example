export const getIsFood = (foodFilter, specializations) => {
  return foodFilter.length 
    ? specializations
      .some(({ Name }) => foodFilter.includes(Name))
    : true;
};
