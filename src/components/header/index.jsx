// Modules
import React, { memo } from "react";
// Components
import { Logo } from "@components/logo";
import { Search } from "@components/search";
// Styles
import { styles } from "./styles";

const HeaderComponent = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <Logo />
        </div>
        <div className="header__search">
          <Search />
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const Header = memo(HeaderComponent);
