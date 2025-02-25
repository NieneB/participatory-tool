import * as Styled from "./index.styles";
import { NavLink } from "react-router-dom";
import Panel from "../components/Panel";

const Overview = () => {
  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" :"top" }>
      <h1>Participatory approach to a complex spatially integrated design process
      </h1>
      <p> To create an effective approach, it is very important to acknowledge the strengths and biases of each perspective. By respecting each others expertise, we can create a balanced situation in which our methods complement each other. Being transparant about the differences in positions helps to clarify the need for participation and to determine where a participatory approach would be valuable or not. Design Academy Eindhoven is approaching this through a cartographic lens: the map als a design method can help to visualize the complex relation between actors and their interests. It therefore creates a wider view on the situation at hand and helps to open up the possibilities in participation. </p>
      <p>We've organized our approach in these three chapters: </p>
      <Styled.Buttons>
        <NavLink to="scope">
          <Panel color='first-rank' title='Scope' >
            <p>What are the steps, conditions and people involved in the participatory process?</p>
          </Panel>
        </NavLink>
        <NavLink to="positions">
        <Panel color='first-rank' title='Positions'>
            <p>Why, what and who are the three positions involved in the water focussed innovation projects? </p>
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
