// Modules
import React, { memo, useCallback } from "react";
// Styles
import { styles } from "./styles";

const ItemComponent = ({ item }) => {
  return (
    <>
      <div className="list__item">
        <div className="list-item__image">
          <img src={item.Logo} alt={item.Name} />
        </div>
        <div>{item.Name}</div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const Item = memo(ItemComponent);
