// Modules
import React, { memo, useCallback, useRef } from "react";
import { debounce } from "lodash";
// Modules Components
import { Input } from "antd";
// Utils
import { Consts } from "@utils";
// Enhance
import { enhance } from "./enhance";
// Styles
import { styles } from "./styles";

const { SEARCH_MS } = Consts.DEBOUNCE;

const SearchComponent = ({ changeSearch }) => {
  const debounceSearchUsers = useRef(debounce(changeSearch, SEARCH_MS)).current;
  const setSearch = useCallback(e => debounceSearchUsers(e.target.value), []);

  return (
    <>
      <div className="search">
        <Input
          onChange={setSearch}
          placeholder="Поиск заведения"
          size="large"
        />
      </div>
      <style jsx>{styles}</style>
    </>
  );
};

const SearchMemo = memo(SearchComponent);

export const Search = enhance(SearchMemo);
