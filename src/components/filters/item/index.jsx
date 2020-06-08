// Modules
import React, { memo, useCallback } from "react";
// Modules Components
import { Checkbox } from "antd";
// Styles
import { styles } from "./styles";

export const ItemComponent = ({ changeFilters, item, index }) => {
  const onChange = useCallback(() => changeFilters(index), []);

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
