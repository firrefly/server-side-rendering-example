// Modules
import css from "styled-jsx/css";

export const styles = css`
  .info__header-block {
    position: relative;
  }

  .info__header-block,
  .header-block__info {
    display: flex;
  }

  .header-block__title {
    flex: 1 1 auto;
  }

  .header-block__info {
    & > div:first-child {
      margin-right: 5px;
    }
  }

  @media (max-width: 768px) {
    .header-block__title {
      text-align: center;
    }

    .header-block__info {
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  @media (max-width: 576px) {
    .header-block__info {
      display: none;
    }
  }
`;
