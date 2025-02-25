import DefaultPage from "../../components/DefaultPage";
import dataset from "../content/phases.json"

const Phases = () => {

  return <DefaultPage title="Phases" desc="What should we do and when? This overview describes the phases of the process, led by the participatory position. Since the nature of these processes are never linear, we’ve created a visual model to illustrate the iterative reality of working together with different perspectives in contexts that vary." dataset={dataset}>
    <p>What should we do and when? This overview describes the phases of the process, led by the participatory position. Since the nature of these processes are never linear, we’ve created a visual model to illustrate the iterative reality of working together with different perspectives in contexts that vary.</p>
    <p>Each phase describes very clearly what the goals and suggested means to reach that goal are. Please note that in any case, the answer can also be; no, or none or nobody. The participatory approach is here to explore, identify and apply possibilities for participation. The scope of the approach depends on the context, the needs, expectations and available resources. </p>
    <p>The participaptory process is an iterative process. If we are not flexible enough in our approach to respond to an ever changing situation, participation cannot be supported. Involving people, initiatives and perspectives is not a matter of deadlines, but it is a matter of collaboration. </p>
    <p>The iterative process is not a circular one, but steps that are subsequent. If we go back to a step, we then follow up by walking through the steps after that. </p>
    <img src="./img/iterative waterfall model.png"/>
  </DefaultPage>;
};
export default Phases;
