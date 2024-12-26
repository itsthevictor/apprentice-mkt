import { activities } from "../data/activities";
import { counties } from "../data/counties";
import { Form } from "react-router-dom";
import Wrapper from "../assets/Wrappers/AddListing";
import { DropdownSelect, Dropzone } from "../components";

import { useCallback, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { PreviewImage } from "../components";
import { HiMiniXMark } from "react-icons/hi2";
import { mainFetch } from "../utils/customFetch";

import ReactInputTags from "react-tags-js";

export const sendData = async (e) => {
  // const formData = await request.formData();
  // const data = Object.fromEntries(formData);
  e.preventDefault();
  var data = new FormData(e.currentTarget);
  // files.forEach((item) => data.append("file", item));
  files.forEach((item) => data.files.push(item));
  data.append("upload_preset", "grote-markt");
  let formObject = Object.fromEntries(data);
  console.log("formObject", formObject);
  try {
    const response = await mainFetch.post("/listings", data, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
  // console.log(data);
  // return null;
};

const AddListingForm = () => {
  const [files, setFiles] = useState([]);
  const [rejectedFiles, setRejectedFiles] = useState([]);

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
  const removeFile = (name) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };
  const removeRejectedFile = (name) => {
    setRejectedFiles((files) => files.filter((file) => file.name !== name));
  };

  const sendData = async (e) => {
    e.preventDefault();
    let data = new FormData(e.currentTarget);
    console.log("data", data);

    let file = [];
    // files.forEach((item) => data.append("file", item));
    // files.forEach((item) => data.file.push(item));

    data.append("upload_preset", "grote-markt");
    let formObject = Object.fromEntries(data);

    console.log("formObject", formObject);
    try {
      const response = await mainFetch.post("/listings", formObject);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    // console.log(data);
    // return null;
  };

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagsChange = (movies) => {
    setSelectedTags(movies);
  };

  const movieOptions = [
    { value: "avatar", label: "Avatar" },
    { value: "inception", label: "Inception" },
    { value: "jurassic-park", label: "Jurassic Park" },
    { value: "star-wars", label: "Star Wars" },
    { value: "titanic", label: "Titanic" },
    { value: "the-lion-king", label: "The Lion King" },
    { value: "pulp-fiction", label: "Pulp Fiction" },
  ];

  return (
    <Wrapper>
      {" "}
      <div className="container">
        <label className="title" htmlFor="form">
          <h2>Adaugă anunț</h2>
        </label>
        <form method="post" className="form" id="form" onSubmit={sendData}>
          <div className="row">
            <label htmlFor="title">denumire</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="ex. Club de șah"
            />
          </div>

          <div className="row">
            <label htmlFor="category">categoria</label>
            <select name="type" id="category">
              {activities.map((item, i) => (
                <option key={i} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="row">
            <label htmlFor="county">județ</label>
            <DropdownSelect
              data={counties}
              defaultOption={"alege județul"}
              name={"county"}
              county
            />
          </div>

          <div className="row">
            <label htmlFor="city">localitate</label>
            <input type="text" name="city" id="city" />
          </div>

          <div className="row">
            <label htmlFor="description">descriere</label>
            <textarea rows="10" cols="4" name="description" id="description" />
          </div>
          <div className="row">
            <label htmlFor="tags">aptitudini </label>

            <ReactInputTags
              tags={selectedTags}
              onChange={handleTagsChange}
              options={movieOptions}
            />
          </div>
          <div className="row">
            <label htmlFor="gallery">galerie</label>
            <>
              <div
                {...getRootProps()}
                className={isDragActive ? "drag-area active" : "drag-area"}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>
                    Drag & Drop your images, or click to select files. <br></br>
                    1 Mb maximum file size
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
                        <button
                          type="button"
                          onClick={() => removeFile(file.name)}
                        >
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
            </>
          </div>
          <div className="fake-row"></div>
          <div className="fake-row"></div>
          <div className="fake-row"></div>
          <div className="fake-row"></div>
          <div className="fake-row"></div>

          <button type="button" className="submit-btn" onClick={sendData}>
            continuă
          </button>
        </form>
      </div>
    </Wrapper>
  );
};
export default AddListingForm;
