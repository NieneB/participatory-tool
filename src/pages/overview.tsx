import * as Styled from "./index.styles";
import { Link } from "react-router-dom";
import Panel from "../components/Panel";

const Overview = () => {
  return (
    <>
      <h1>Participatory approach to a complex spatially integrated design process
      </h1>
      <p> To create an effective approach, it is very important to acknowledge the strengths and biases of each perspective. By respecting each others expertise, we can create a balanced situation in which our methods complement each other. Being transparant about the differences in positions helps to clarify the need for participation and to determine where a participatory approach would be valuable or not. Design Academy Eindhoven is approaching this through a cartographic lens: the map als a design method can help to visualize the complex relation between actors and their interests. It therefore creates a wider view on the situation at hand and helps to open up the possibilities in participation. </p>
      <p>We've organized our approach in these three chapters: </p>
      <Styled.Buttons>
        <Link to="/scope">
          {" "}
          <Panel color='yellow' title='Scope' solid='not'>
            <p>What are the steps, conditions and people involved in the participatory process?</p>
          </Panel>
        </Link>
        <Link to="/positions">
        <Panel color='purple' title='Positions' solid='not' >
            <p>Why, what and who are the three positions involved in the water focussed innovation projects? </p>
          </Panel>
         
        </Link>
        <Link to="/actions">
        <Panel color='pink' title='Actions' solid='not' >
            <p>How can you act on the opportunities and questions that arise? </p>
          </Panel>
        </Link>
      </Styled.Buttons>

    </>
  );
};

export default Overview;
