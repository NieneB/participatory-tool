import NavBack from "src/components/NavBack";
import * as Styled from "./index.styles";

const Positions = () => {
  return (
    <Styled.Main>
      <NavBack />

      <h1>Positions</h1>
      <Styled.Buttons>
        <Styled.Button>
          <h2>Non-organized</h2>
        </Styled.Button>
        <Styled.Button>
          <h2>Community organized</h2>
        </Styled.Button>
        <Styled.Button>
          <h2>Government organized</h2>
        </Styled.Button>
      </Styled.Buttons>
    </Styled.Main>
  );
};
export default Positions;
