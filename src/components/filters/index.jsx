// Modules
import React, { memo, useCallback } from "react";
// Components
import { Item } from "./item";
// Enhance
import { enhance } from "./enhance";
// Styles
import { styles } from "./styles";

const FiltersComponent = ({ 
  changeFilters,
  changeOptionsFilter,
  foodFilters,
  optionsFilters,
}) => {
  const renderOptionsFilters = useCallback(
    (item, index) => {
      return (
        <Item 
          key={item.id}
          filter="options"
          changeFilters={changeFilters}
          index={index}
          item={item}
        />
      );
    },
    [optionsFilters]
  );

  const renderItem = useCallback(
    (item, index) => (
      <Item
        key={item.id}
        filter="foodList"
        changeFilters={changeFilters}
        index={index}
        item={item}
      />
    )
  );

  return (
    <>
      <div className="filters">
        {optionsFilters.map(renderOptionsFilters)}
        {foodFilters.map(renderItem)}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

const FiltersMemo = memo(FiltersComponent);

export const Filters = enhance(FiltersMemo);
