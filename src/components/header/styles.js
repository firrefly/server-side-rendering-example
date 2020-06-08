// Modules
import css from "styled-jsx/css";

export const styles = css`
  .header {
    display: flex;
    align-items: center;
    padding: 20px;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 100;
  }

  .header__logo {
    margin-right: 20px;
    width: 225px;
    height: 65px;
  }

  .header__search {
    flex: 1 1 auto;
  }

  @media (max-width: 768px) {
    .header {
      flex-direction: column;

      & > div {
        width: 100%;
        &:first-child {
          margin-bottom: 15px;
        }
      }
    }
  }
`;
