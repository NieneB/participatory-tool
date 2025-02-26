import NavBack from "../components/NavBack";

const Positions = () => {

  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" : "top"}>
      <NavBack />
      <h1>Positions</h1>
      <h2>Why, what and who are the three positions involved in the water focussed innovation projects?</h2>
      <p>It is important to recognize and address the differences between perspectives that are involved in this process. There could also be possible overlapping in responsibilities. Each perspective has their own value to add, but they also have their limitations. The challenge is to balance all the approaches, so that they complement and reinforce each other, rather than conflict and contradict each other.</p>
      <img src="./img/positions.png" />
      <h2>Community organized</h2>
      <p>
        The community based approach is focussed on the needs and interest of the people in a community; a group that connects over shared interests. Their main goal is to create and align solutions in the area with the reality of the users.
      </p>
      <p>
        This perspective helps the others to provide a deeper insight in to the dynamics within a community. Mapping the connections between the actors helps to support the people that are affected with the process on a daily basis and to connect and uplift their existing networks and knowledge.
      </p>
      <h2>Government organized</h2>
      <p>
        Institutional analysis provides a broader view of the actors and decision making structures involved in a government approach. Their expertise and research makes it possible to place decisions in a larger context, even if the specific stakeholders have not yet been identified. This allows us to exert influence on matters that have already been decided or established.
      </p>
      <p>
        The institutional analysis provides a systematic framework that helps to understand the involvement and influence of the institutional actors. This can be very useful to determine when and how participation should be integrated into a project (when the designer should be involved and especially when he or she should not be involved) to make sure a balance in perspectives is curated.
      </p>
      <h2>Non-organized</h2>
      <p>The participatory perspective aims to involve all actors in the decision making. To do so, they try to analyse and research the blind spots of the other perspectives. Different research methods help to uncover actors in the area that are usually overlooked or assumed to be informed. Since all actors have their strengths and weaknesses, no one actor has the best answer. Providing a diversity of actors and therefore knowledge, expertise and experiences, create far better and durable solutions then designs based on one person’s point of view. </p>
      <p>The participatory perspective provides the decision makers with the tools and training to actively invite other perspectives into their decision making. The representative of the perspective is not a spokesperson for diversity, but a designer of a process where diversity is the biggest quality a group can have.
      </p>
    </div>
  );
};
export default Positions;
