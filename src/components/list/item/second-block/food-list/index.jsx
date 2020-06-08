// Modules
import React, { memo } from "react";
// Styles
import { styles } from "./styles";

const FoodListComponent = ({ name }) => {
  return (
    <>
      <div className="food-item">
        {name}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const FoodList = memo(FoodListComponent);
