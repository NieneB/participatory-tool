import { Link } from "react-router-dom";
import * as Styled from "./index.styles";
import { ArrowDown, ArrowLeft, ArrowRight, Circle } from "iconoir-react";
import NavBack from "../components/NavBack";
import Panel from "../components/Panel";

const Scope = () => {
  return (
    <Styled.Main>
      {/* <NavBack/> */}
      <h1>Scope</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.:</p>
      <Styled.Buttons>
        <Link to="/scope/phases">
          <Panel color='yellow' title='Phases' >
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
          </Panel>

        </Link>
        <Link to="/scope/infrastructure">
          <Panel color='yellow' title='Infrastructure' >
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
          </Panel>

        </Link>
        <Link to="/scope/representative">
          <Panel color='yellow' title='Representative' >
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
          </Panel>

        </Link>
      </Styled.Buttons>
    </Styled.Main>
  );
};
export default Scope;
