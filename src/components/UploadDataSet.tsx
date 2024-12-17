import { Play, Xmark } from "iconoir-react";
import { useState } from "react";
import InputFile from "./InputFile";

const UploadFile = function ({ setDataSet, setIsOpenCustom }) {
  const [fileLoaded, setFileLoaded] = useState(false);
  const [fileName, setFileName] = useState("");

  const resetAll = (e) => {
    setFileName("");
    setDataSet([]);
    setFileLoaded(false);
  };

  return (
    <>
      <p>Upload your graph file (json) to start mapping!</p>

      <InputFile
        setFileLoaded={setFileLoaded}
        fileLoaded={fileLoaded}
        setDataSet={setDataSet}
        setFileName={setFileName}
      />

      {fileLoaded && (
        <div style={{ display: "flex" }}>
          <h4 style={{ marginRight: "1rem", marginLeft: "1rem" }}>
            Your file: {fileName}
          </h4>
          <Xmark onClick={resetAll} alt="remove file" />
          {fileLoaded && (
            <button onClick={() => setIsOpenCustom(false)}>
              Start <Play />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default UploadFile;
