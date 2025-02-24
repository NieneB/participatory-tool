import { NavLink } from "react-router-dom";
import * as Styled from "./index.styles";
import Panel from "../components/Panel";
import NavBack from "../components/NavBack";

const Scope = () => {
  return (
    <>
      <NavBack />
      <h1>Scope</h1>
      <p>What are the steps, conditions and people involved in the participatory process? This roadmap is a guideline for a participation process. Please be aware that all steps, conditions and people involved are very much dependent on the context. These are all general descriptions, that always need to be adjusted to the context in question. We offer actions to accompany these generic steps, to adjust the process to the context. Therefore a close collaboration with the institutional and community perspective is essential. </p>
      <p>The timeline, budget and impact of the participation are conditional on the innovation project process. The participation process (just as the community- and institutional), supports the technical innovation process that is always reliant on local circumstances.</p>
      <Styled.Buttons>
        <NavLink to="phases">
          <Panel color='second-rank' title='Phases'  >
            <p>Determining, analyzing, adjusting and upscaling the involvement of actors</p>
          </Panel>
        </NavLink>
        <NavLink to="conditions">
          <Panel color='second-rank' title='Conditions'  >
            <p>The necessities before starting the process</p>
          </Panel>
        </NavLink>
        <NavLink to="representative">
          <Panel color='second-rank' title='Representatives' >
            <p>The people from the positions connected to the participation process</p>
          </Panel>
        </NavLink>
      </Styled.Buttons>
    </>
  );
};
export default Scope;
