import styled from "styled-components";

const Button = styled.div`
  margin: 0;
  padding: 0.5rem ;
  width: auto;
  height: auto;
  border-radius: 2px;
  box-sizing: border-box;

  display: flex;
  flex-direction:row;
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
`;

const CenterPanelSolid = ({ title, color, children }) => {
  return (
    <Button className={`${color}` }>
      <h3>{title} </h3>
    </Button>
  );
};

export default CenterPanelSolid;
