import { Play, Xmark } from "iconoir-react";
import { useState } from "react";
import InputFile from "./InputFile";
import { EnterButton } from "../pages/index.styles";

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
            <EnterButton onClick={() => setIsOpenCustom(false)}>
              Start <Play />
            </EnterButton>
          )}
        </div>
      )}
    </>
  );
};

export default UploadFile;
