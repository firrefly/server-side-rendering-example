// Modules
import React, { memo, useCallback } from "react";
// Modules Components
import { Typography } from "antd";
import { LikeOutlined } from "@ant-design/icons";
// Components
import { FirstBlock } from "./first-block";
import { SecondBlock } from "./second-block";
import { ThirdBlock } from "./third-block";
// Styles
import { styles } from "./styles";

const { Text } = Typography;

const ItemComponent = ({ item }) => {
  const renderSpecializations = useCallback(({ Name }) => (
    <div key={Name}>
      {Name}
    </div>
  ), []);

  return (
    <>
      <div className="list__item">
        <FirstBlock item={item} />

        <div className="list-item__right-block">
         <SecondBlock item={item} />
         <ThirdBlock item={item} />
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const Item = memo(ItemComponent);
