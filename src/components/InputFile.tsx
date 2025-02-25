import { useRef } from "react";
import { EnterButton } from "../pages/index.styles";

const InputFile = ({ setFileName, fileLoaded, setFileLoaded, setDataSet }: any) => {
  const inputFile = useRef(null);

  const openfile = (event) => {
    inputFile.current.click();
  };

  const readFile = (filePath) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      setDataSet();
      const rawdata = evt.target.result;
      setDataSet(JSON.parse(rawdata));
    };
    reader.readAsText(filePath);
  };

  return (
    <div>
      <EnterButton onClick={openfile}>{fileLoaded ? "Re-" : ""}Start Uploading graph document</EnterButton>
      <input
        ref={inputFile}
        style={{ display: "none" }}
        type="file"
        id="file-upload"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file: Blob = e.target.files[0];
          setFileName(e.target.files[0].name);
          readFile(file);
          setFileLoaded(true);
        }}
        accept=".json"
      />
    </div>
  );
};

export default InputFile;
