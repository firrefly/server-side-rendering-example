// Modules
import React, { memo } from "react";
// Styles
import { styles } from "./styles";

const HeaderBlockComponent = ({ item }) => {
  return (
    <>
      <div className="header-block">
        <img src={item.ProductImage} alt={item.RestaurantName} />
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const HeaderBlock = memo(HeaderBlockComponent);
