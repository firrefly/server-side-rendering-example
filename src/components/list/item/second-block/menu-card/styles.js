// Modules
import css from "styled-jsx/css";

export const styles = css`
  .menu-card {
    flex: 1 1 auto;
    display: flex;
    align-items: flex-end;
    margin-left: -15px;
  }

  .menu-card__item {
    margin-left: 15px;
    font-size: 0.85em;
  }

  .counter {
    margin-left: 5px;
    font-size: 0.8em;
  }

  @media (max-width: 768px) {
    .menu-card {
      justify-content: center;
    }
  }
`;
