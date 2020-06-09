// Modules
import React, { memo } from "react";
// Styles
import { styles } from "./styles";

const ContentBlockComponent = ({ item }) => {
  return (
    <>
      <div className="content-block">
        <div className="content-block__title">
          {item.ProductName}
        </div>
        <div className="conetnt-block__body">
          {item.ProductDescription}
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const ContentBlock = memo(ContentBlockComponent);
