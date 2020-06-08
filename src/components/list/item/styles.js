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
    width: 110px;
    height: 110px;

    & > img {
      width: 100%;
    }
  }

  .list-item__right-block {
    flex: 1 1 auto;
    display: flex;
  }

  .list-item__info,
  .list-item__options {
    width: 50%;
  }
`;
