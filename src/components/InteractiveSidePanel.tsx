import { useEffect, useState } from "react";
import styled from "styled-components";
import { Circle } from "iconoir-react";

const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: var(--color-brown-light);
  color: white;

  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  margin: 1rem 1rem 1rem 0rem;
  p {
    color:white;
  }
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
justify-content: space-between;
margin-bottom: 1rem;

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

`;

const InteractiveSidePanel = ({ id, extraCollapse, setExtraCollapse, children, title }) => {
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
        { !isCollapsed && <h2>{title}</h2>}
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
