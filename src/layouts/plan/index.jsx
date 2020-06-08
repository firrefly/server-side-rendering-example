// Modules
import React, { memo } from "react";
// Styles
import { styles } from "./styles";

const PlanLayoutComponent = ({ children }) => {
  return (
    <>
      <div className="layout plan_layout">
        {children}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const PlanLayout = memo(PlanLayoutComponent);
