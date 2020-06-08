// Modules
import css from "styled-jsx/css";

export const styles = css`
  .right-block__info {
    width: 50%;
    display: flex;
    flex-direction: column;
  }

  .food-list {
    display: flex;
    margin-left: -5px;
  }

  @media (max-width: 768px) {
    .right-block__info {
      width: 100%;
    }

    .food-list {
      justify-content: center;
    }
  }

  @media (max-width: 576px) {
    .right-block__info {
      margin: 20px 0;
    }
  }
`;
