// Modules
import React, { memo, useCallback } from "react";
// Modules Components
import { Typography } from "antd";
import { LikeOutlined } from "@ant-design/icons";
// Components
import { TitleCard } from "./title-card";
import { FoodList } from "./food-list";
// Styles
import { styles } from "./styles";

const { Text } = Typography;

const SecondBlockComponent = ({ item }) => {
  const renderSpecializations = useCallback(({ Name }) => (
    <FoodList key={Name} name={Name} />
  ), []);

  return (
    <>
    <div className="right-block__info">
        <TitleCard item={item} />

        <div className="food-list">
          {item.Specializations.map(renderSpecializations)}
        </div>

      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const SecondBlock = memo(SecondBlockComponent);
