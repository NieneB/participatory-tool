import { Link } from "react-router-dom";
import * as Styled from "./index.styles";
import { ArrowDown, ArrowLeft, ArrowRight } from "iconoir-react";
import NavBack from "src/components/NavBack";

const Scope = () => {
  return (
    <Styled.Main>
      <NavBack/>
    <h1>Scope</h1>
      <Styled.Buttons>
        <Link to="/scope/phases">
          <Styled.Button>
            <ArrowLeft></ArrowLeft>
            <h2>Phases</h2>
          </Styled.Button>
        </Link>
        <Link to="/scope/infrastructure">
          <Styled.Button>
            <ArrowDown></ArrowDown>

            <h2>Infrastructure</h2>
          </Styled.Button>
        </Link>
        <Link to="/scope/representative">
          <Styled.Button>
            <ArrowRight></ArrowRight>
            <h2>Representative</h2>
          </Styled.Button>
        </Link>
      </Styled.Buttons>
    </Styled.Main>
  );
};
export default Scope;
