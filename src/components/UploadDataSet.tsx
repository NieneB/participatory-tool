import { Play, Xmark } from "iconoir-react";
import { useState } from "react";
import InputFile from "./InputFile";
import CustomActionButton from "./CustomActionButton";

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
        <>
          {/* <h3 >
            You uploaded the file: {fileName} <Xmark onClick={resetAll} alt="remove file" />
          </h3> */}
          {fileLoaded && (
            <div onClick={() => setIsOpenCustom(false)}>
              <CustomActionButton text={`Start mapping ${fileName}`}> </CustomActionButton>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default UploadFile;
