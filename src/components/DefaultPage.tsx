import styled from "styled-components";
import InteractiveSidePanel from "./InteractiveSidePanel";
import { data, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "iconoir-react";
import { useEffect, useState } from "react";
import * as Styled from "./../pages/index.styles";
import NavBack from "./NavBack";
import Panel from "./Panel";



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
`

const DefaultPage = ({ title, desc, dataset }) => {
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
      <Styled.Main>
        <h1>{title}</h1>
        <p>{desc}</p>
        <Panel title={title} color="yellow" solid='solid'></Panel>
        {dataset.map((element, i) => {
          return (
            <Element key={element.title} onClick={() => fillPanelContent(element)}>
              <ElementHeader key={'li' + element.title}>
                <h1>{element.title}</h1>
                <h2>{element.subtitle}</h2>
              </ElementHeader>
              <ElementLinks>
                <li>1. clickable</li>
                <li>1. clickable</li>
                <li>1. clickable</li>
              </ElementLinks>
              <ElementContent>
                {element.goal && <p>Goal: {element.goal}</p>}
                {element.assignment && <p>Assignment: {element.assignment}</p>}
                {element.using && <><p>By using:</p>
                  <ul>
                    {element.using.map((el) => {
                      return (<li key={el}>{el}</li>)
                    })}
                  </ul>
                  </>
                }
                { element.output && <p>Output: {element.output}</p> }
                { element.iteration && <p>Iteration: {element.iteration}</p> }

              </ElementContent>
            </Element>
          );
        })}
      </Styled.Main>
    </>
  );
};

export default DefaultPage;
