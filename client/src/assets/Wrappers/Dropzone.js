import styled from "styled-components";

const Wrapper = styled.div`
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

  /* <div className="rejected-files">
          <label htmlFor="rejected-files-list">Fișiere respinse</label>
          <ul id="rejected-files-list">
            {rejectedFiles.map(({ file, errors }) => (
              <li key={file.name}>
                <div>
                  <p>{file.name}</p>
                </div>
                <ul className="errors-list">
                  {errors.map((error) => (
                    <li key={error.code}>{error.message}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div> */
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

  @media only screen and (max-width: 500px) {
  }
`;

export default Wrapper;
