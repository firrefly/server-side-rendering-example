// Modules
import css from "styled-jsx/css";

export const styles = css`
  .food-item {
    margin-left: 5px;
    font-size: 0.85em;

    &:not(:last-child)::after {
      content: "|";
      margin-left: 4px;
    }
  }
`;