import * as Styled from "./index.styles";
import { NavLink } from "react-router-dom";
import Panel from "../components/Panel";

const Overview = () => {
  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" :"top" }>
      <h1>Participatory process in chapters</h1>
      <p>To create an impact on the design process from the participatory postion, it is very important to acknowledge the strengths and biases of each contributing perspective. By respecting our differences in expertise, we can create a balanced situation in which our approaches complement each other. Being transparant about the differences in positions, helps to clarify the need from the expectations for participation in the area and to determine where a participatory approach could be valuable and effective. The team from Design Academy Eindhoven, led by Naomi Bueno de Mesquita, is approaching this process through a cartographic lens: the map als a design method can help to visualize the complex relation between actors and their interests. It therefore creates a wider view on the situation at hand and helps to open up the possibilities in participation.</p>
      <p>We've organized our total approach in the following chapters:</p>
      <Styled.Buttons>
        <NavLink to="scope">
          <Panel color='first-rank' title='Scope' >
            <p>What are the steps, conditions and people involved in this participatory approach?</p>
          </Panel>
        </NavLink>
        <NavLink to="positions">
        <Panel color='first-rank' title='Positions'>
            <p>Why, what and who are the three positions involved in the water focussed innovation projects?</p>
          </Panel>
        </NavLink>
        <NavLink to="actions">
        <Panel color='first-rank' title='Actions'  >
            <p>How can you act on the opportunities and questions that arise? </p>
          </Panel>
        </NavLink>
      </Styled.Buttons>

    </div>
  );
};

export default Overview;
