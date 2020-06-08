// Modules
import React, { memo, useCallback } from "react";
// Modules Components
import { Checkbox } from "antd";
// Styles
import { styles } from "./styles";

export const ItemComponent = ({
  changeFilters,
  changeOptionsFilters,
  item,
  index,
  filter,
}) => {
  const onChange = useCallback(() => 
    changeFilters(filter, index),
    [index, item.id]
  );

  return (
    <>
      <div className="filters__item item">
        <Checkbox
          checked={item.checked}
          onChange={onChange}
        >
          {item.name}
        </Checkbox>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const Item = memo(ItemComponent);
