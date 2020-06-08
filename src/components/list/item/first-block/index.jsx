// Modules
import React, { memo } from "react";
// Styles
import { styles } from "./styles";

const FirstBlockComponent = ({ item }) => {
  return (
    <>
      <div className="list-item__image">
        <img src={item.Logo} alt={item.Name} />
      </div>
      <style jsx>{styles}</style>
    </>
  );
}

export const FirstBlock = memo(FirstBlockComponent);
