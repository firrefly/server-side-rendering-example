export const getIsSearch = (search = '', name) => {
  const validSearch = search.trim().toUpperCase();
  
  return validSearch.length
    ? name
      .toUpperCase()
      .indexOf(validSearch) !== -1
    : true;
};
