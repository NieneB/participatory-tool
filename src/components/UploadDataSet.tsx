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
          {fileLoaded && (
            <>
            <h1>Step 4. Your actor mapping will appear!</h1>
            <div onClick={() => setIsOpenCustom(false)}>
              <CustomActionButton text={`Start mapping ${fileName}`}> </CustomActionButton>
            </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default UploadFile;
