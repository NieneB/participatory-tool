import { Link } from "react-router-dom";
import DefaultMarkdownPage from "../../components/DefaultMarkdownPage";
import CenterPanelSolid from "../../components/CenterPanelSolid";

const Methods = () => {
  const listFiles = []
  for (let i = 0; i <= 22 - 1; i++) {
    let name = `method${i + 1}`
    listFiles.push(name)
  }


  return (
    <>
      <CenterPanelSolid title={"Methods"} color="yellow"></CenterPanelSolid>
      <h1>Methods</h1>
      <p>Lorum ipsum </p>
      <div>
        {listFiles.map((fileName, i) => {
          return (
            <>
              <h3><Link to={`/${fileName}`}> Method {i + 1}</Link></h3>
              <DefaultMarkdownPage key={fileName} fileInput={fileName}> </DefaultMarkdownPage>
            </>
          )
        })}
      </div>
    </>)
};
export default Methods;
