
import NavBack from "./NavBack";
import DefaultPageParagraph from "./DefaultPageParagraph";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DefaultPage = ({ title, desc, dataset, children }) => {
  const location = useLocation();
  
  useEffect(() => {
    // console.log(location)
    // console.log(window.history.go)
    // length: 40
    // scrollRestoration: "auto"
    // state: Object { usr: null, key: "rf9za23j", idx: 5 }
    // idx: 5
    // key: "rf9za23j
    // usr: null
    // console.log(location.hash) 
    
  }, [])
  
  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" :"top" }>
      <NavBack />
      {title && <h1 >{title}</h1>}
      {desc && <p>{desc}</p>}
      {children && <>{children}</>}
      <>
        {/* Rendering card paragraphs */}
        {dataset && dataset.map((element) => {
          return (
            <DefaultPageParagraph element={element} active={location.hash}/>
          )
        })}
      </>

    </div>
  );
};

export default DefaultPage;
