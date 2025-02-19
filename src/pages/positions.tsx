import * as Styled from "./index.styles";
import { Link } from "react-router-dom";
import Panel from "src/components/Panel";

const Positions = () => {
  return (
    <Styled.Main>

      <h1>Positions</h1>

      <Styled.Buttons>
        <Link to="/positions/non-organized">
          {" "}
          <Panel color='yellow' title='Non-organized' >
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
          </Panel>
        </Link>
        <Link to="/positions/community-organized">
        <Panel color='purple' title='Community organized' >
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
          </Panel>
         
        </Link>
        <Link to="/positions/government-organized">
        <Panel color='pink' title='Government organized' >
            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
          </Panel>
        </Link>
      </Styled.Buttons>

    </Styled.Main>
  );
};
export default Positions;
