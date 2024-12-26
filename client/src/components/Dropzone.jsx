import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Wrapper from "../assets/Wrappers/Dropzone";
import { HiMiniXMark } from "react-icons/hi2";
import { PreviewImage } from "../components";
import { AddListingContext } from "../contexts/addListingContext";
import { useContext } from "react";
const Dropzone = () => {
  const {
    files,
    setFiles,
    rejectedFiles,
    setRejectedFiles,
    removeFile,
    removeRejectedFile,
  } = useContext(AddListingContext);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    // Do something with the files
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
      // console.log(files);
    }
    if (rejectedFiles?.length) {
      setRejectedFiles((previousFiles) => [...previousFiles, ...rejectedFiles]);
    }
    // console.log(rejectedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
  });

  return (
    <Wrapper>
      <div
        {...getRootProps()}
        className={isDragActive ? "drag-area active" : "drag-area"}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>
            Drag & Drop your images, or click to select files. <br></br>1 Mb
            maximum file size
          </p>
        )}
      </div>
      {files.length >= 1 && (
        <div className="accepted-files-container">
          {" "}
          <label htmlFor="accepted-files-list">Fișiere acceptate</label>
          <ul id="accepted-files-list">
            {files.map((file) => (
              <li key={file.name}>
                <PreviewImage
                  src={file.preview}
                  width={100}
                  height={100}
                  onLoad={() => URL.revokeObjectURL(file.preview)}
                />
                <button type="button" onClick={() => removeFile(file.name)}>
                  <HiMiniXMark size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {rejectedFiles.length >= 1 && (
        <div className="rejected-files">
          <label htmlFor="rejected-files-list">Fișiere respinse</label>
          <ul id="rejected-files-list" className="rejected-files-list">
            {rejectedFiles.map(({ file, errors, i }) => (
              <li key={i}>
                <div>
                  <p className="file-name">{file.name}</p>
                </div>
                <ul className="errors-list">
                  {errors.map((error) => (
                    <li key={error.message}>{error.message}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Wrapper>
  );
};
export default Dropzone;
