// Modules
import React, { memo } from "react";
// Components
import { HeaderBlock } from "./header-block";
import { ContentBlock } from "./content-block";
import { FooterBlock } from "./footer-block";
// Styles
import { styles } from "./styles";

const HitsItemComponent = ({ item }) => {
  return (
    <>
      <div className="hits-item">
        <div className="hits-item-inner">
          <div className="hits-item__header-block">
            <HeaderBlock item={item} />
          </div>
          <div className="hits-item__content-block">
            <ContentBlock item={item} />
          </div>
          <div className="hits-item__footer-block">
            <FooterBlock item={item} />
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const HitsItem = memo(HitsItemComponent);
