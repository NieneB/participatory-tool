import styled from "styled-components";
import InteractiveSidePanel from "./InteractiveSidePanel";
import { useEffect, useState } from "react";
import * as Styled from "./../pages/index.styles";
import NavBack from "./NavBack";
import DefaultPageParagraph from "./DefaultPageParagraph";

const DefaultPage = ({ title, desc, dataset, children }) => {

  return (
    <>
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

    </>
  );
};

export default DefaultPage;
