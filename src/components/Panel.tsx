import { Circle } from "iconoir-react";
import styled from "styled-components";

const Button = styled.div`
  background-color: rgba(0,0,0,0);
  border-radius: 2px;
  box-sizing: border-box;
  max-width: 200px;
  color: #000;
  cursor: pointer;
    min-height: 250px;
    max-width: 200px;
    padding:1rem;
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

  &.solid {
    background-color: var(--color-yellow-main)
  }

  h1 {
    font-size:1rem;
    text-transform: uppercase;
  }

  margin: 0;
  padding: 1rem 1.5rem;
  
  user-select: none;
  -webkit-user-select: none;

  &:hover {
    /* outline: 5px solid #000;
    outline-offset: 0.3rem;
    border-radius: 0px; */
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

const Panel = ({ title, color, solid, children }) => {
    return (
        <Button className={`${color} ${solid}`}>
            <h1>{title} </h1>
            <Circle color={`var(--color-${color}-main`} width={36} height={36} />
            {children && <p>{children}</p>}
        </Button>
    );
};

export default Panel;
