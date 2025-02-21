import { Circle } from "iconoir-react";
import styled from "styled-components";

const Button = styled.div`
  margin: 0;
  padding: 1rem ;
  max-width: 15rem;
  height: auto;
  margin:auto;
  border-radius: 2px;
  box-sizing: border-box;

  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 1rem;

  color : #fff;
  &.pink {
    background-color: var(--color-pink-main);
    border: 1px solid var(--color-pink-main);
  }
  &.purple {
    background-color: var(--color-purple-main);
    border: 1px solid var(--color-purple-main);
  }
  &.yellow {
    background-color: var(--color-yellow-main);
    border: 1px solid var(--color-yellow-main);
  }


  h1 {
    font-size:1rem;
    text-transform: uppercase;
  }
`;

const CenterPanelSolid = ({ title, color, children }) => {
  return (
    <Button className={`${color}` }>
      <h1>{title} </h1>
      <Circle color={`white`} width={36} height={36} />
      {children && <p>{children}</p>}
    </Button>
  );
};

export default CenterPanelSolid;
