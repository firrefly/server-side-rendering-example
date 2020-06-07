// Modules
import React, { memo } from "react";
// Modules Components
import { Input } from "antd";
// Styles
import { styles } from "./styles";

const SearchComponent = () => {
  return (
    <>
      <div className="search">
        <Input placeholder="Basic usage" />
      </div>
      {/* <style jsx>{styles}</style> */}
    </>
  );
};

export const Search = memo(SearchComponent);
