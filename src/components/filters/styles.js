// Modules
import css from "styled-jsx/css";

export const styles = css`
  @media (min-width: 993px) {
    .filters {
      padding-right: 20px;
      width: 225px;
    }
  }

  @media (max-width: 992px) {
    .filters {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`;
