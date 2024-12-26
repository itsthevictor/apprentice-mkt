import styled from "styled-components";

const Wrapper = styled.div`
  .listing-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 200px;
    padding: 15px;
    /* border: 1px solid hsl(var(--accent)); */
    border-radius: var(--round-md);
    width: 100%;
    background: white;
    box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.15);

    .thumbnail {
      border-radius: 10px;
      width: 100%;
      height: 320px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      margin-bottom: 10px;
    }

    .details {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .location {
      display: flex;
      align-items: center;
      gap: 5px;
      .location-pin {
        color: hsl(var(--accent));
      }
    }
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-wrap: normal;
      font-weight: 600;
      text-transform: capitalize;
    }

    .type {
      padding: 3px 7px;
      font-weight: 500;
      background: hsl(var(--bkg-muted));
      border-radius: var(--round-md);
      width: fit-content;
      text-transform: capitalize;
    }

    .location {
      margin-top: -5px;
    }

    .created-by {
      margin-top: -10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-weight: 500;
        color: hsl(var(--accent));
      }
    }
  }
`;

export default Wrapper;
