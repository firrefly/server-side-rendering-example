// Modules
import React, { memo } from "react"
// Styles
import { styles } from "./styles";

const LogoComponent = () => {
  return (
    <>
      <img
        className="logo"
        src="/img/logo.png"
        alt="logo"
      />
      <style jsx>{styles}</style>
    </>
  );
};

export const Logo = memo(LogoComponent);
