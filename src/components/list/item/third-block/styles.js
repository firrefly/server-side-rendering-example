// Modules
import css from "styled-jsx/css";

export const styles = css`
  .third-block__options {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 0.85em;
  }

  .options-inner {
    display: flex;
  }

  .options-inner__item {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 769px) {
    .options-inner {
      margin-right: 30px;
    }

    .options-inner__label {
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    .third-block__options {
      flex: 1 1 auto;
      width: 100%;
      justify-content: flex-start;
      align-items: flex-end;
    }

    .options-inner {
      width: 100%;
      flex-direction: column-reverse;
    }

    .options-inner__item {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }

    .options-inner__label,
    .options-inner__data {
      width: 33%;
      text-align: center;
    }

    .options-inner__data {
      font-size: 1.7em;
    }
  }
`;
