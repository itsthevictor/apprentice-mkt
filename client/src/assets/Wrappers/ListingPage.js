import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    width: 80vw;
    margin: 50px auto;
    min-width: var(--max-width);
    height: fit-content;
    /* background: hsl(var(--bkg-muted)); */
  }

  @media only screen and (max-width: 1200px) {
    .container {
      width: 95vw;
      min-width: 92vw;
    }
  }

  @media only screen and (max-width: 900px) {
    .container {
      /* width: 95vw;
      min-width: 95vw; */
    }
  }

  @media only screen and (max-width: 500px) {
    .container {
      width: 90vw;
      max-width: 90vw;
    }
  }
`;

export default Wrapper;
