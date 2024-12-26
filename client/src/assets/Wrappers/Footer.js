import styled from "styled-components";

const Wrapper = styled.div`
  .footer {
    height: var(--footer-height);
    background: hsl(var(--accent-hover));
  }

  @media (max-width: 1200px) {
    .container {
      width: 95vw;
      min-width: 95vw;
    }
  }
`;

export default Wrapper;
