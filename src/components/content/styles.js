// Modules
import css from "styled-jsx/css";

export const styles = css`
  .content {
    display: flex;
    align-items: flex-start;
    padding: 0 20px 20px 20px;
  }

  .content__filters {
    margin-right: 20px;
    position: sticky;
    top: 105px;
    z-index: 100;
    background-color: #fff;
  }

  .content__list {
    flex: 1 1 auto;
  }

  @media (max-width: 992px) {
    .content {
      flex-direction: column;
      align-items: center;
    }

    .content__filters {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .content__filters {
      top: 160px;
      width: 100%;
    }
  }
`;
