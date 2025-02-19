import styled from "styled-components";
import InteractiveSidePanel from "./InteractiveSidePanel";
import { data, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "iconoir-react";
import { useEffect, useState } from "react";
import * as Styled from "./../pages/index.styles";
import NavBack from "./NavBack";
import Panel from "./Panel";



const List = styled.ol`
  display: flex;
  flex-direction: column;
 justify-content: start;
  `;

const Element = styled.div`
  /* padding: 3rem; */
  width: 100%;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: 1fr 2fr;
  
  >p{
    grid-row: 2;
    grid-column: 1/span 2;
  }
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


const DefaultPage = ({ title, dataset }) => {
  const navigate = useNavigate();
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
        <Panel title={title} color="yellow" solid='solid'><p>Lorem ipsum
          dolor sit amet,
          consectetur
          adipiscing elit</p></Panel>
        <List>
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
                  <p>{element.content}</p>
              </Element>
            );
          })}
        </List>
      </Styled.Main>
    </>
  );
};

export default DefaultPage;
