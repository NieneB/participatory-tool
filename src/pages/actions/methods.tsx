import { Link } from "react-router-dom";
import DefaultMarkdownPage from "../../components/DefaultMarkdownPage";
import * as Styled from "./../index.styles";

const Methods = () => {
  const listFiles = []
  for (let i = 0; i <= 2 - 1; i++) {
    let name = `method${i + 1}`
    listFiles.push(name)
  }


  return (
    <Styled.Main>
      <div>
        {listFiles.map((fileName, i) => {
          return (
            <DefaultMarkdownPage key={fileName} fileInput={fileName}> </DefaultMarkdownPage>
          )
        })}
      </div>
    </Styled.Main>)
};
export default Methods;
