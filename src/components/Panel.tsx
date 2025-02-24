import { Circle } from "iconoir-react";
import styled from "styled-components";

const Button = styled.div`
  margin: 0;
  padding: 1rem ;
  max-width: 12rem;
  min-height: 15rem;
  overflow: hidden;
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
  &.first-rank {
      border: 2px solid var(--color-brown-second);
    }
  &.second-rank {
      border: 2px solid var(--color-brown-third);
    }
    

  h1 {
    font-size:1rem;
    text-transform: uppercase;
  }
  p {
    text-align:center;
  }

  &:hover {
    background-color: var(--color-pink-main);
    color: #ffffff;
    border: 0px solid #000;
    p {
      color: white;
    }
      &.first-rank {
      border: 4px solid var(--color-brown-second);
      background-color: var(--color-brown-second);
      color: white;
    }
    &.second-rank {
      border: 4px solid var(--color-brown-third);
      background-color: var(--color-brown-third);
      color: white;
    }
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

const colorIcon = "white"

const Panel = ({ title, color, children }) => {
  return (
    <Button className={`${color}`}>
      <h1>{title} </h1>
      <Circle color={`${colorIcon}`} width={36} height={36} />
      {children && <>{children}</>}
    </Button>
  );
};

export default Panel;
