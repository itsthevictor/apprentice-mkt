import { createContext, useState } from "react";

export const AddListingContext = createContext();

const AddListingContextProvider = (props) => {
  const [files, setFiles] = useState([]);
  const [rejectedFiles, setRejectedFiles] = useState([]);
  const [values, setValues] = useState("check check");

  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };
  const removeRejectedFile = (name) => {
    setRejectedFiles((files) => files.filter((file) => file.name !== name));
  };

  return (
    <AddListingContext.Provider
      value={{
        files,
        setFiles,
        rejectedFiles,
        setRejectedFiles,
        removeFile,
        removeRejectedFile,
        values,
      }}
    >
      {props.children}
    </AddListingContext.Provider>
  );
};

export default AddListingContextProvider;
