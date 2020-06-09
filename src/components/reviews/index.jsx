// Modules
import React, { memo, useCallback } from "react";
// Modules Components
import { Typography } from "antd";
// Components
import { ReviewsItem } from "./item";
// Enhance
import { enhance } from "./enhance";
// Styles
import { styles } from "./styles";

const { Title } = Typography;

const ReviewsComponent = ({ rewiews }) => {
  const renderItem = useCallback(
    item => (
      <ReviewsItem
        key={item.DateAdded}
        item={item}
      />
    ),
    []
  );

  return (
    <>
      <div className="rewiews">
        <div className="header-rewiews">
          <Title level={3}>Отзывы</Title>
        </div>
        <div className="rewiews-list">
          {rewiews.map(renderItem)}
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

const RewiewsMemo = memo(ReviewsComponent);

export const Rewiews = enhance(RewiewsMemo);
