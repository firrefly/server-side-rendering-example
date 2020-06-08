// Modules
import React, { memo, useCallback, useEffect, useState } from "react";
// Modules Components
import { Typography } from "antd";
// Lib
import { getList } from "@lib/get-list";
// Components
import { Item } from "./item";
// Enhance
import { enhance } from "./enhance";
// Styles
import { styles } from "./styles";

const { Title } = Typography;

const ListComponent = ({ list, search, foodFilter, optionsFilter }) => {
  const [listState, updateListState] = useState(list);
  const [isLoad, updateIsLoad] = useState(false);

  useEffect(() => {
    getList({ list, search, foodFilter, optionsFilter }, updateListState, updateIsLoad);
  }, [search, foodFilter, optionsFilter]);

  const renderItem = useCallback(
    (item, index) => (
      <Item key={`${item.Name}_${index}`} item={item} />
    ), []
  );

  return (
    <>
      <div className="list" style={{ opacity: isLoad ? 0.2 : 1}}>
        <div className="header-list">
          <Title level={3}>Рестораны</Title>
        </div>
        <div className="content__list list">
          {listState.map(renderItem)}
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

const ListMemo = memo(ListComponent);

export const List = enhance(ListMemo);
