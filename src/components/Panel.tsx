import { Circle } from "iconoir-react";
import styled from "styled-components";

const Button = styled.div`
  margin: 0;
  padding: 1rem ;
  max-width: 10rem;
  min-height: 15rem;

  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  background-color: rgba(0,0,0,0);
  border-radius: 2px;
  box-sizing: border-box;

  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 1rem;

  &.pink {
    border: 1px solid var(--color-pink-main);
  }
  &.purple {
    border: 1px solid var(--color-purple-main);
  }
  &.yellow {
    border: 1px solid var(--color-yellow-main);
  }


  h1 {
    font-size:1rem;
    text-transform: uppercase;
  }

  &:hover {
    background-color: var(--color-yellow-main);
    color: #ffffff;
    border: 0px solid #000;
    &.pink {
        border: 1px solid var(--color-pink-main);
        background-color: var(--color-pink-main);
    }
    &.purple {
      border: 1px solid var(--color-purple-main);
      background-color: var(--color-purple-main);
    }
    &.yellow {
      border: 1px solid var(--color-yellow-main);
      background-color: var(--color-yellow-main);
    }
}
`;

const Panel = ({ title, color, children }) => {
  return (
    <Button className={`${color}`}>
      <h1>{title} </h1>
      <Circle color={`var(--color-${color}-main`} width={36} height={36} />
      {children && <p>{children}</p>}
    </Button>
  );
};

export default Panel;
