// Modules
import React, { memo } from "react";
// Components
import { Filters } from "@components/filters";
// Styles
import { styles } from "./styles";

const ContentComponent = () => {
  return (
    <>
      <div className="content">
        <div className="content__filters">
          <Filters />
        </div>
        <div className="content__list">
          List
        </div>
      </div>
      <style jsx>{styles}</style>
     </>
  );
};

export const Content = memo(ContentComponent);
