// Modules
import React, { memo } from "react";
// Styles
import { styles } from "./styles";

const ThirdBlockComponent = ({ item }) => {
  return (
    <>
      <div className="third-block__options">
        options
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const ThirdBlock = memo(ThirdBlockComponent);
