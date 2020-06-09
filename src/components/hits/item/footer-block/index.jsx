// Modules
import React, { memo } from "react";
// Modules Components
import { Typography } from "antd";
// Styles
import { styles } from "./styles";

const { Title } = Typography;

const FooterBlockComponent = ({ item }) => {
  return (
    <>
      <div className="footer-block">
        <Title level={4}>{item.ProductPrice} Р</Title>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const FooterBlock = memo(FooterBlockComponent);
