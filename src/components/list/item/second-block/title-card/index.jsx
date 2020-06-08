// Modules
import React, { memo } from "react";
// Modules Components
import { Typography } from "antd";
import { LikeOutlined } from "@ant-design/icons";
// Styles
import { styles } from "./styles";

const { Text } = Typography;

const TitleCardComponent = ({ item }) => {
  return (
    <>
      <div className="info__header-block">
        <div className="header-block__title">
          <Text strong>{item.Name}</Text>
        </div>
        <div className="header-block__info">
          <div>
            <LikeOutlined />
          </div>
          <div>
            <Text
              strong
              type={item.PositiveReviews > 50 ? "warning" : "secondary"}
            >
              {`${item.PositiveReviews}%`}
            </Text>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

export const TitleCard = memo(TitleCardComponent);
