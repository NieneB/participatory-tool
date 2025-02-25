import { Link } from "react-router-dom";
import DefaultMarkdownPage from "../../components/DefaultMarkdownPage";
import NavBack from "../../components/NavBack";

const Methods = () => {
  const listFiles = []
  for (let i = 0; i <= 22 - 1; i++) {
    let name = `method${i + 1}`
    listFiles.push(name)
  }


  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" :"top" }>
      <NavBack/>
      <h1>Methods</h1>
      <p>Lorum ipsum </p>
      <img src="./img/methods.png"/>
      <div>
        {listFiles.map((fileName, i) => {
          return (
            <>
              <h3><Link to={`/${fileName}`}> Method {i + 1}</Link></h3>
              <DefaultMarkdownPage key={fileName} fileInput={fileName}>
                 </DefaultMarkdownPage>
            </>
          )
        })}
      </div>
    </div>)
};
export default Methods;
