// Modules
import React, { memo } from "react";
// Modules Components
import { Typography } from "antd";
// Styles
import { styles } from "./styles";

const { Text  } = Typography;

const FoodListComponent = ({ name }) => {
  return (
    <>
      <div className="food-item">
        <Text type="secondary">{name}</Text>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const FoodList = memo(FoodListComponent);
