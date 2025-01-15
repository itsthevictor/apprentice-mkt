import styled from "styled-components";

const Wrapper = styled.section`
  .search-bar-container {
    height: calc(100vh - var(--nav-height));
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background-image: url("/lego.jpg") */
    background-image: url("https://res.cloudinary.com/dgp67jheg/image/upload/v1736922859/listening-mentor-with-attention_f0ts05.webp");

    /* background: chartreuse; */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .search-bar {
    display: flex;
    border: 2px solid hsl(var(--accent));
    border-radius: var(--round-sm);
    background: white;
    margin-top: -3em;
    box-shadow: -8px 13px 15px -3px rgba(0, 0, 0, 0.1);

    .search-bar:first-child {
      border-radius: var(--round-sm);
    }

    select {
      padding: 10px 10px;
      font-size: 1.5em;
      border: none;
      border-radius: var(--round-sm);
      outline: none;
      color: black;
      margin-right: 10px;
      background: white;

      option {
        color: black;
      }
    }

    button {
      padding: 10px 20px;
      font-size: 1.5em;
      border: none;
      border-radius: 0 2px 2px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;
      color: white;
      background: hsl(var(--accent));
      text-transform: capitalize;

      span {
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1);
        margin-bottom: -6px;
      }
    }

    button:hover {
      background: hsl(var(--accent-hover));
    }
  }
  @media only screen and (max-width: 750px) {
    .search-bar {
      flex-direction: column;
    }
  }
  /* @media only screen and (max-width: 500px) {
    .search-bar {
      flex-direction: column;
    }
  } */
`;

export default Wrapper;
