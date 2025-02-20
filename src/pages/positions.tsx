import * as Styled from "./index.styles";
import { Link } from "react-router-dom";
import Panel from "../components/Panel";

const Positions = () => {
  return (
    <>

      <h1>Positions</h1>
      <h2>Why, what and who are the three positions involved in the water focussed innovation projects? </h2>
      <p>It is important to recognize and address the tension between the three perspectives that are overlapping in these types of projects. Each perspective has it's own value, but they also have their limitations. The challenge is to balance the approaches, so that they complement and reinforce each other, rather than conflict. We believe that an informed participatory approach can provide a balance here.</p>

      <h2>Community organized</h2>
      <p>
        The community based approach is focussed on the needs and interest of the people in a community; a group that connects over shared interests. Their main goal is to create and align solutions in the area with the reality of the users.</p>
      <p>This perspective helps the others to provide a deeper insight in to the dynamics within a community. Mapping the connections between the actors helps to support the people that are affected with the process on a daily basis and to connect and uplift their existing networks and knowledge.
      </p>
      <h2>Government organized</h2>
<p>
Institutional analysis provides a broader view of the actors and structures involved in a government organized process. It makes it possible to place decisions in a larger context, even if the specific stakeholders have not yet been identified. This allows us to exert influence on matters that have already been decided or established.</p>
<p>
The institutional analysis provides a systematic framework that helps to understand the involvement and influence of the institutional actors. This can be very useful to determine when and how participation should be integrated into a project (when the designer should be involved and especially when he or she should not be involved) to make sure a balance in perspectives is curated.

</p>
<h2>Non-organized</h2>
<p>Lorum ipsum tekst eenzo more to come here </p>
      {/* <Styled.Buttons>
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
      </Styled.Buttons> */}

    </>
  );
};
export default Positions;
