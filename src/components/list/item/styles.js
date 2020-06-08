// Modules
import css from "styled-jsx/css";

export const styles = css`
  .list__item {
    display: flex;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: solid 1px #f0f0f0;
    transition: border-color 0.2s ease-in-out;

    &:hover {
      border-color: #1890ff;
    }
  }

  .list-item__right-block {
    flex: 1 1 auto;
    display: flex;
  }

  .info__header {
    display: flex;
  }
`;
