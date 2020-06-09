// Modules
import React, { memo, useCallback } from "react";
// Modules Components
import { Typography } from "antd";
// Components
import { HitsItem } from "./item";
// Enhance
import { enhance } from "./enhance";
// Styles
import { styles } from "./styles";

const { Title } = Typography;

const HitsComponent = ({ hits }) => {
  const renderItem = useCallback(
    (item, index) => (
      <HitsItem key={`hit_${index}`} item={item} />
    ),
    []
  );

  return (
    <>
      <div className="hits">
        <div className="header-hits">
          <Title level={3}>Хиты</Title>
        </div>
        <div className="hits__list">
          {hits.map(renderItem)}
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

const HitsMemo = memo(HitsComponent);

export const Hits = enhance(HitsMemo);
