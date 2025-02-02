import styled from "styled-components";

const Wrapper = styled.div`
  .container {
    width: 80vw;
    margin: 50px auto;
    min-width: var(--max-width);
    height: fit-content;
    display: flex;
    /* ali */
    flex-direction: column;

    /* background: hsl(var(--bkg-muted)); */

    .title h2{
      margin: 0 auto;
      width: 100%;
       color: hsl(var(--accent-logo));
      font-size: var(--fs-400);
      font-weight: 500;
    }

    form {
      position: relative;
      width: 100%;
      margin: 20px auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
      padding: 30px 50px;
      border-radius: var(--round-md);
      box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.15);

      .row {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 100%;
        /* font-size: 1.5em; */
        label {
          text-transform: capitalize;
          color:hsl(var(--text));
          font-weight:500;
        }

        input,
        select,
        textarea {
          padding: 8px 20px;
          border-radius: var(--round-sm);
          outline: none;
          border: 1px solid hsl(var(--accent-300));
          width: 100%;
          font-size: 1.15em;
          background: hsl(var(--accent-400));
        }

        select{
          text-transform:capitalize;
        }

        textarea{
           height: 178px;
           background: inherit;
        }

       

        .drag-area {
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          color: hsl(var(--text));
          border-radius: var(--round-sm);
          padding: 25px;
          /* background: hsl(var(--accent-300)); */
          height: 178px;
          border: 2px dashed hsl(var(--text-muted));
        }
        .active {
          justify-content: center;
          width: 100%;
          text-align: center;
          color: hsl(var(--text));
          background: hsl(var(--accent-400));
          border: 2px dashed hsl(var(--accent-200));
        }
      }

      .submit-btn {
        min-width: 100%;
        margin: 20px auto;
        /* max-width:450px; */

        &:hover{
 box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.15);
        }
      }

        .accepted-files-container {
    margin-top: 40px;
  }
  ul {
    margin: 20px 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    .thumbnail {
      width: 100px;
      height: 100px;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: var(--round-sm);
    }

    li {
      margin-right: 15px;
      position: relative;

      button {
        position: absolute;
        background: hsl(var(--warning-100));
        border: none;
        outline: none;
        color: white;
        cursor: pointer;
        padding: 2px 2px 0 2px;
        right: -10px;
        top: -10px;
        border-radius: 50%;
      }
    }
  }

  .rejected-files {
    width: 100%;
    margin-top: 40px;

    .rejected-files-list {
      display: flex;
      flex-direction: column;

      /* background: chartreuse; */
      .file-name {
        font-size: 0.9em;
        color: hsl(var(--text));
      }

      .errors-list {
        margin-top: -2px;
        display: flex;
        flex-direction: column;
        font-size: 0.75em;
        color: hsl(var(--warning-100));
      }
    }
  }
    }
  }

  @media only screen and (max-width: 1675px) {
    .container {
      form {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      width: 95vw;
      min-width: 92vw;
      form {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media only screen and (max-width: 965px) {
    .container {
      width: 90vw;
      max-width: 90vw;
      form {
        grid-template-columns: 1fr;
         padding: 30px 50px;
       
      
     
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .container {
      width: 90vw;
      max-width: 90vw;
      form {
        grid-template-columns: 1fr;
             .row {
          width: 100%;
      }
    }
  }
`;

export default Wrapper;
