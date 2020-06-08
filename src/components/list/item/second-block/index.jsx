// Modules
import React, { memo, useCallback } from "react";
// Components
import { TitleCard } from "./title-card";
import { FoodList } from "./food-list";
import { MenuCard } from "./menu-card";
// Styles
import { styles } from "./styles";

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

        <MenuCard item={item} />
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const SecondBlock = memo(SecondBlockComponent);
