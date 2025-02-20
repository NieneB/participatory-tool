import { Link } from "react-router-dom";
import DefaultMarkdownPage from "../../components/DefaultMarkdownPage";
import * as Styled from "./../index.styles";

const Methods = () => {
  const listFiles = []
    for (let i = 0; i <= 1 ; i++) {
      let name = `/method${i+1}`
      listFiles.push(name)
    }
  

  return (
    <Styled.Main>
      {listFiles.map((fileName, i) => {
        return <Link to={fileName}> Method {i+1} </Link>
      })}
    </Styled.Main>)
};
export default Methods;
