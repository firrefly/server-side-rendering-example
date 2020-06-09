// Modules
import css from "styled-jsx/css";

export const styles = css`
  .hits-item {
    overflow: hidden;
    padding: 10px 0 0 10px;
  }

  .hits-item-inner {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border: solid 1px #f0f0f0;
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border-color: #1890ff;
    }

    @media (min-width: 577px) {
      .hits-item-inner {
        height: 350px;
      }
    }
  }

  .hits-item__footer-block {
    flex: 1 1 0;
    display: flex;
    align-items: flex-end;
  }

  @media (min-width: 769px) {
    .hits-item {
      width: 33%;
    }
  }

  @media (max-width: 768px) {
    .hits-item {
      width: 50%;
    }
  }

  @media (max-width: 576px) {
    .hits-item {
      width: 100%;
      text-align: center;
    }
  }
`;
