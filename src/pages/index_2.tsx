import * as Styled from "./index.styles";
import { Link } from "react-router-dom";
import Panel from "src/components/Panel";

const Home2 = () => {
  return (
    <Styled.Main>
      <h1>Lorem ipsum dolor sit amet, con-
        sectetur adipiscing elit, sed do
        eiusmod tempor.
      </h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.:</p>
      <Styled.Buttons>
        <Link to="/scope">
          {" "}
          <Panel color='yellow' title='Scope' >
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
          </Panel>
        </Link>
        <Link to="/positions">
        <Panel color='purple' title='Positions' >
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
          </Panel>
         
        </Link>
        <Link to="/actions">
        <Panel color='pink' title='Actions' >
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
          </Panel>
        </Link>
      </Styled.Buttons>

    </Styled.Main>
  );
};

export default Home2;
