import { Link } from "react-router-dom";
import DefaultMarkdownPage from "../../components/DefaultMarkdownPage";
import * as Styled from "./../index.styles";

const Methods = () => {
  const listFiles = []
  for (let i = 0; i <= 22 - 1; i++) {
    let name = `method${i + 1}`
    listFiles.push(name)
  }


  return (
    <Styled.Main>
      <div>
        {listFiles.map((fileName, i) => {
          return (
            <>
            <h3><Link to={`/${fileName}`}> Method {i+1}</Link></h3>
            <DefaultMarkdownPage key={fileName} fileInput={fileName}> </DefaultMarkdownPage>
            </>
          )
        })}
      </div>
    </Styled.Main>)
};
export default Methods;
