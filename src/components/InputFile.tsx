import { useRef } from "react";

const InputFile = ({ setFileName, fileLoaded, setFileLoaded, setDataSet }: any) => {
  const inputFile = useRef(null);

  const openfile = (event) => {
    inputFile.current.click();
  };

  const readFile = (filePath) => {
    console.log("check");
    const reader = new FileReader();
    reader.onload = (evt) => {
      setDataSet();
      const rawdata = evt.target.result;
      console.log(rawdata)
      setDataSet(JSON.parse(rawdata));
    };
    reader.readAsText(filePath);
  };

  return (
    <div>
      <button onClick={openfile}>{fileLoaded ? "Re-" : ""}Start Uploading graph document</button>
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
