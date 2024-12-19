import { Link } from "react-router-dom";
import * as Styled from "./index.styles";
import { ArrowDown } from "iconoir-react";

const Journeys = () => {
  return (
    <Styled.Main>
      <h1>Journeys</h1>
      <Styled.Buttons>
        <Link to="/positions/phases">
          <Styled.Button>
            <ArrowDown></ArrowDown>
            <h2>Phases</h2>
          </Styled.Button>
        </Link>
        <Link to="/positions/conditions">
          <Styled.Button>
            <ArrowDown></ArrowDown>

            <h2>Conditions</h2>
          </Styled.Button>
        </Link>
        <Link to="/positions/people">
          <Styled.Button>
            <ArrowDown></ArrowDown>

            <h2>Conditions</h2>
          </Styled.Button>
        </Link>
      </Styled.Buttons>
    </Styled.Main>
  );
};
export default Journeys;