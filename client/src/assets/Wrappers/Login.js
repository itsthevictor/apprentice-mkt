import styled from "styled-components";

const Wrapper = styled.section`
  .container {
    height: calc(100vh - var(--nav-height));
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("https://res.cloudinary.com/dgp67jheg/image/upload/v1716456258/junior%20markt/play_sjdrap.jpg");
    background-repeat: no-repeat;
    background-size: cover;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: auto;
      width: 550px;
      background: white;
      /* margin-top: -20px; */
      border-radius: var(--round-lg);
      padding: 40px;
      gap: 20px;
      box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

      h3 {
        font-size: var(--fs-500);
        color: hsl(var(--accent-hover));
      }

      .input-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        width: 75%;

        label {
          font-size: 12px;
          text-align: left;
          margin-bottom: 10px;
          font-weight: 600;
          text-transform:capitalize;
        }

        input, select, option {
          padding: 15px 20px;
          width: 100%;
          border-radius: var(--round-sm);
          outline: none;
          border: 1px solid grey;
        }

        input[type='select']
      }
      .submit-btn {
        border-radius: 45px;
        text-align:center;
      }
      a {
        color: hsl(var(--accent));
        font-weight: 500;
        font-size: 14px;
        text-transform: capitalize;
      }
    }
  }
`;

export default Wrapper;
