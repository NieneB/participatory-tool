import { NavLink } from "react-router-dom";
import * as Styled from "./index.styles";
import Panel from "../components/Panel";
import NavBack from "../components/NavBack";

const Scope = () => {
  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" :"top" }>
      <NavBack />
      <h1>Scope</h1>
      <p>What are the steps, conditions and people involved in this participatory approach? Our roadmap is a guideline for a participation process. We use the term guideline deliberately, because the descriptions are all generic. Since the nature of the spatial design processes will always be contextual, the roadmap will have to be adjusted to the situation at hand. We provide you with as much information and tools to respond to the ever changing reality of the context. The phases are closely linked to the activations and positions, which will be visible in the descriptions. A close collaboration with the institutional and community perspective is essential for a successful process. </p>
      <p>The timeline and available budget are all factors that impact the actual impact of the participatory approach. The participation approach (just as the community- and institutional), supports the technical innovation process that is always reliant on local resources.</p>
      <Styled.Buttons>
        <NavLink to="phases">
          <Panel color='second-rank' title='Phases'  >
            <p>Determining, analyzing, adjusting and up scaling the involvement of actors</p>
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
    </div>
  );
};
export default Scope;
