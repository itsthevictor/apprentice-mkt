import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    width: 80vw;
    margin: 50px auto;
    min-width: var(--max-width);
    height: fit-content;
    /* background: hsl(var(--bkg-muted)); */

    .listings-container {
      margin-top: 25px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
      height: fit-content;
      grid-auto-rows: 1fr;
    }
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
      .listings-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .container {
      width: 90vw;
      max-width: 90vw;

      .listings-container {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

export default Wrapper;
