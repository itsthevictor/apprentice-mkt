import styled from "styled-components";

const Wrapper = styled.section`
  border-bottom: 1px solid #dce0e6;
  font-weight: 300;

  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
  }
  .menu {
    display: flex;
    gap: 40px;
  }
`;

export default Wrapper;
