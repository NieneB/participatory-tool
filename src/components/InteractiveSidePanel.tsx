import { useEffect, useState } from "react";
import styled from "styled-components";
import { FastArrowLeft, FastArrowRight } from "iconoir-react";

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
  background-color: #eaeadd;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  margin: 1rem 1rem 1rem 0rem;

  &.small {
    padding: 0.8rem;
    height: 66px;
    width: fit-content;
  }

  &.large {
    max-width: 50vw;
    display: grid;
    grid-template-columns: 9fr 1fr;
    padding: 1rem;
  }
`;

const Folding = styled.div`
  cursor: pointer;
  grid-column: 2 / span 1;
  justify-self: end;

  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  &.small {
  }

  &.large {
  }

  &:hover {
    outline: 5px solid #000;
    outline-offset: 0.3rem;
    border-radius: 0px;
  }
`;

const Content = styled.div`
  grid-column: 1 / span 1;
`;

const InteractiveSidePanel = ({ id, extraCollapse, setExtraCollapse, children }) => {
  const [isCollapsed, setIsCollasped] = useState(false);

  const collapseOnClick = (e) => {
    e.preventDefault();
    setIsCollasped(!isCollapsed);
    console.log("collapse on click,", isCollapsed, id);
    setExtraCollapse(false)
  };

  useEffect(() => {
    console.log("collapse extra,", extraCollapse, id)
    isCollapsed  && extraCollapse ?  setIsCollasped(false) : ''
  }, [extraCollapse]);

  return (
    <Container key={"1"} className={isCollapsed ? "small" : "large"}>
      {!isCollapsed && <Content> {children}</Content>}
      <Folding
        className={isCollapsed ? "small" : "large"}
        onClick={(e) => collapseOnClick(e)}
      >
        {isCollapsed ? (
          <FastArrowRight color="black" width="36" height="36" />
        ) : (
          <FastArrowLeft color="black" width="36" height="36" />
        )}
      </Folding>
    </Container>
  );
};

export default InteractiveSidePanel;
