import styled from "styled-components";
import InteractivePanel from "./InteractivePanel";
import { data, useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "iconoir-react";
import { useEffect, useState } from "react";
import * as Styled from "./../pages/index.styles";
import NavBack from "./NavBack";

const Element = styled.div`
  padding: 3rem;
  border: 1px solid #292929;
  transform: rotate(40deg);
  cursor: pointer;
  &:hover {
    border: 3px solid #292929;
  }
`;

const List = styled.ol`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
        <Styled.Nav>
          <NavBack></NavBack>
          <Styled.Button onClick={() => navigate("/")}>
            <Home></Home>
          </Styled.Button>
        </Styled.Nav>
        {panelContent && (
          <InteractivePanel>
            <>
              <h1>{panelTitle}</h1>
              <p>{panelContent}</p>
            </>
          </InteractivePanel>
        )}
      </Styled.Left>
      <Styled.Main>
        <h1>{title}</h1>
        <List>
          {dataset.map((element,i) => {
            return (
              <Element key={element.title} onClick={() => fillPanelContent(element)}>
                <li key={'li'+ element.title}>
                  <h2>{i+1}. {element.title}</h2>
                  <p>{element.content}</p>
                </li>
              </Element>
            );
          })}
        </List>
      </Styled.Main>
    </>
  );
};

export default DefaultPage;
