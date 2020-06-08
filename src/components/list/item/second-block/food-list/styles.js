// Modules
import css from "styled-jsx/css";

export const styles = css`
  .food-item {
    margin-left: 5px;

    &:not(:last-child)::after {
      content: "/";
      margin-left: 4px;
    }
  }
`;