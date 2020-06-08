// Modules
import css from "styled-jsx/css";

export const styles = css`
  .list__item {
    width: 100%;
    padding: 10px;
    display: flex;
  }

  .list-item__image {
    margin-right: 10px;

    & > img {
      width: 110px;
      height: 110px;
    }
  }
`;
