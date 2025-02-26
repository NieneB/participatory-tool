import * as Styled from "./index.styles";
import { NavLink } from "react-router-dom";
import Panel from "../components/Panel";
import NavBack from "../components/NavBack";

const Actions = () => {

  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" : "top"}>
      <NavBack />
      <h1>Actions</h1>
      <p>
        How can you act on the questions and participation opportunities that arise? Our roadmap is a guideline for a participation process. We use a selection of methods and tools to support the objectives mentioned in the phases. The methods and tools act as a preparation for the actor mapping. The findings in that mapping excercise can be put to use by the proposed activations. Each action is linked to another one. Together they support the designing of the participatory process.
      </p>
      <p>Since the nature of the spatial design processes will always be contextual, the roadmap will have to be adjusted to the situation at hand. This also counts for the methods, tools an activations we suggest. We provide you with as much information and tools to respond to the ever changing reality of the context. The phases are closely linked to the activations and positions, which will be visible in the descriptions. A close collaboration with the institutional and community perspective is essential for a successful process.
      </p>
      <p>
        The timeline and available budget are all factors that impact the actual impact of the participatory approach. The participation approach (just as the community- and institutional), supports the technical innovation process that is always reliant on local resources.
      </p>
      <Styled.Buttons>
        <NavLink to="/approach/actions/methods">
          <Panel color='second-rank' title='Method & Tools' >
            <p>Identifying participation opportunities</p>
          </Panel>
        </NavLink>
        <NavLink to="/approach/actions/mapping">
          <Panel color='second-rank' title='Mapping approach' >
            <p>Collecting participation opportunities </p>

          </Panel>
        </NavLink>
        <NavLink to="/approach/actions/activation">
          <Panel color='second-rank' title='Activation' >
            <p>Acting on the participation opportunities</p>
          </Panel>
        </NavLink>
      </Styled.Buttons>
    </div>
  );
};

export default Actions;
