// Modules
import React, { memo, useCallback } from "react";
// Components
import { Item } from "./item";
// Enhance
import { enhance } from "./enhance";
// Styles
import { styles } from "./styles";

const ListComponent = ({ list }) => {
  const renderItem = useCallback(
    (item, index) => (
      <Item key={`${item.Name}_${index}`} item={item} />
    ), []
  );

  return (
    <>
      <div className="content__list list">
        {list.map(renderItem)}
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

const ListMemo = memo(ListComponent);

export const List = enhance(ListMemo);
