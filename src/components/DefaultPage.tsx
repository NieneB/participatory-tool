
import NavBack from "./NavBack";
import DefaultPageParagraph from "./DefaultPageParagraph";
import { Link } from "react-router-dom";

const DefaultPage = ({ title, desc, dataset, children }) => {

  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" :"top" }>
      <NavBack />
      {title && <h1 >{title}</h1>}
      {desc && <p>{desc}</p>}
      {children && <>{children}</>}
      <>
        {/* Rendering card paragraphs */}
        {dataset && dataset.map((element, i) => {
          return (
            <DefaultPageParagraph element={element} />
          )
        })}
      </>

    </div>
  );
};

export default DefaultPage;
