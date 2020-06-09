// Modules
import css from "styled-jsx/css";

export const styles = css`
  .content-block__title {
    text-align: center;
  }

  .content-block__title {
    margin: 15px 0 0 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
    font-size: 1.3em;
    line-height: 1;
    color: #000;
  }

  .conetnt-block__body {
    margin: 10px auto 15px auto;
    width: 90%;
    overflow: hidden;
    font-size: 0.9em;
  }

  @media (min-width: 577px) {
    .conetnt-block__body {
      height: 75px;
    }
  }
`;
