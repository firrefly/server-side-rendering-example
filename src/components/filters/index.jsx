// Modules
import React, { memo, useCallback } from "react";
// Components
import { Item } from "./item";
// Enhance
import { enhance } from "./enhance";
// Styles
import { styles } from "./styles";

const FiltersComponent = ({ changeFilters, filters }) => {
  const changeFiltersMemo = useCallback(index => changeFilters(index), []);

  const renderItem = useCallback(
    (item, index) => (
      <Item
        key={item.id}
        changeFilters={changeFiltersMemo}
        index={index}
        item={item}
      />
    )
  );

  return (
    <>
      <div className="filters">
        {filters.map(renderItem)}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

const FiltersMemo = memo(FiltersComponent);

export const Filters = enhance(FiltersMemo);
