import { useEffect, useState } from "react";
import styled from "styled-components";
import { Circle, FastArrowLeft, FastArrowRight } from "iconoir-react";

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: var(--color-brown-light);
  color: white;

  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  margin: 1rem 1rem 1rem 0rem;

  &.small {
    padding: 0.8rem;
    height: 66px;
    width: fit-content;
  }

  &.large {
    padding: 1rem;
    & svg {
      color: white;
    }
  }
`;


const ContainerHeader = styled.div`
display : flex;
justify-content: end;
`

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
    setExtraCollapse(false)
  };

  useEffect(() => {
    isCollapsed && extraCollapse ? setIsCollasped(false) : ''
  }, [extraCollapse]);

  return (
    <Container key={"1"} className={isCollapsed ? "small" : "large"}>
      <ContainerHeader >
        <Folding
          className={isCollapsed ? "small" : "large"}
          onClick={(e) => collapseOnClick(e)}
        >
          {isCollapsed ? (
            <Circle color="var(--color-brown-main)" width="36" height="36" />
          ) : (
            <Circle color="var(--color-brown-main)" width="36" height="36" />
          )}
        </Folding>

      </ContainerHeader>
      {!isCollapsed && <Content> {children}</Content>}


    </Container>
  );
};

export default InteractiveSidePanel;
