// Modules
import css from "styled-jsx/css";

export const styles = css`
  .info__header-block,
  .header-block__info {
    display: flex;
  }

  .header-block__title {
    width: 70%;
  }

  .header-block__info {
    & > div:first-child {
      margin-right: 5px;
    }
  }
`;
