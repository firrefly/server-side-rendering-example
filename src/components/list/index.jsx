// Modules
import React, { memo, useCallback } from "react";
// Modules Components
import { Typography } from "antd";
// Components
import { Item } from "./item";
// Enhance
import { enhance } from "./enhance";
// Styles
import { styles } from "./styles";

const { Title } = Typography;

const ListComponent = ({ list }) => {
  const renderItem = useCallback(
    (item, index) => (
      <Item key={`${item.Name}_${index}`} item={item} />
    ), []
  );

  return (
    <>
      <div className="list">
        <div className="header-list">
          <Title level={3}>Рестораны</Title>
        </div>
        <div className="content__list list">
          {list.map(renderItem)}
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

const ListMemo = memo(ListComponent);

export const List = enhance(ListMemo);
