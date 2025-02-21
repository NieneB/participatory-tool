import styled from "styled-components";
import InteractiveSidePanel from "./InteractiveSidePanel";
import { useEffect, useState } from "react";
import * as Styled from "./../pages/index.styles";
import CenterPanelSolid from "./CenterPanelSolid";
import { HashLink } from 'react-router-hash-link';

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

 
  `;

const Element = styled.div`
  /* padding: 3rem; */
  width: 100%;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-rows: 1fr auto;
  
  
`;

const ElementHeader = styled.div`
  margin-bottom: 1.5rem;
  grid-row: 1;
  grid-column: 1 / span 1;
`;


const ElementLinks = styled.div`
  padding-left: 2rem;
  margin-bottom: 1.5rem;
  grid-row: 1;
  grid-column: 2 / span 1;
  justify-self: start;
  align-self: end;
  line-height: 1.5rem;
`;

const ElementContent = styled.div`
 grid-row: 2;
 grid-column: 1 / span 2;
 line-height: 1.5rem;
 & ul {
    list-style: circle;
    list-style-position: inside;
  }

  & p >b {
    text-transform: capitalize;
    font-weight: 800;
  }
  & p  {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: 0.5rem;
  }
`

const DefaultPage = ({ title, desc, dataset, children }) => {
  const [panelTitle, setPanelTitle] = useState("");
  const [panelContent, setPanelContent] = useState("");

  useEffect(() => {
    //find all elements with more info and onclick element fill panel content
    // Dataset
    // setPanelContent("hello");
  }, [dataset]);

  const fillPanelContent = (element) => {
    setPanelTitle(element.title);
    setPanelContent(element.info);
  };

  return (
    <>
      <CenterPanelSolid title={title} color="yellow"><p>{desc}</p></CenterPanelSolid>
      {title && <h1 >{title}</h1>}
      {desc && <p>{desc}</p>}
      {children && <p>{children}</p>}
      <>
        {/* Rendering cards */}
        {dataset && dataset.map((element, i) => {
          return (
            <Element key={element.title} onClick={() => fillPanelContent(element)}>
              <ElementHeader key={'li' + element.title}>
                <h1 id={element.title.replace(/\s+/g, '-').toLowerCase()} >{element.title}</h1>
                {element.subtitle && <h2>{element.subtitle}</h2>}
              </ElementHeader>
              <ElementLinks>
                {element.phase && <HashLink  smooth to={`/scope/phases/#${element.phase.replace(/\s+/g, '-').toLowerCase()}`}>{element.phase}</HashLink>}
                <li>1. clickable</li>
                <li>1. clickable</li>
                <li>1. clickable</li>
              </ElementLinks>
              <ElementContent>
                {element.desc && <p>{element.desc}</p>}
                {element.audience && <p><b>audience:</b> {element.audience}</p>}
                {element.mapping && <p><b>Connection to Mapping Approach:</b> {element.mapping}</p>}
                {element.methods && <p><b>Connection to Methods:</b> {element.methods}</p>}
                {element.goal && <p><b>Goal:</b> {element.goal}</p>}
                {element.assignment && <p><b>Assignment:</b> {element.assignment}</p>}
                {element.using && <p><b>By using:</b>
                  <ul>
                    {element.using.map((el) => {
                      return (<li key={el}>{el}</li>)
                    })}
                  </ul>
                </p>
                }
                {element.output && <p><b>Output:</b> {element.output}</p>}
                {element.iteration && <p><b>Iteration:</b> {element.iteration}</p>}
                {element.role && <p><b>Role:</b> {element.role}</p>}
                {element.objective && <p><b>Objective:</b> {element.objective}</p>}
                {element.links && <p><b>Link:</b> {element.links}</p>}
              </ElementContent>
            </Element>
          )
        })}
      </>
      <Styled.Left>
        {panelContent && (
          <InteractiveSidePanel>
            <>
              <h1>{panelTitle}</h1>
              <p>{panelContent}</p>
            </>
          </InteractiveSidePanel>
        )}
      </Styled.Left>
    </>
  );
};

export default DefaultPage;
