import DefaultPage from "../../components/DefaultPage";
import dataset from "../content/phases.json"

const Phases = () => {

  return <DefaultPage title="Phases" desc="What should we do and when? This overview describes the phases of the process, led by the participatory position. Since the nature of these processes are never linear, we’ve created a visual model to illustrate the iterative reality of working together with different perspectives in contexts that vary." dataset={dataset}>
    <p>What should we do and when? This overview describes the different phases of the participatory process, led by the participatory representative. </p>
    <p>Each phase lists the objectives and suggested means to reach that goal. Please note that in any case, the answer can also be; no, none or nobody in your situation. The participatory approach is here to explore, identify and apply possibilities for participation. The scope of the approach depends on the context, the needs, expectations and available resources. </p>
    <p>Since innovative processes never follow a linear plan, we’ve created a visual model to illustrate the iterative reality and quality of this approach. Working together with different perspectives in contexts that vary may create a lot of uncertainty in decision making. With this structure we hope to provide some guidance in balancing the sometimes messy reality of designing something completely new. </p>
    <p>If we are not flexible enough in our approach to respond to an ever changing situation, participation cannot be supported. Involving people, initiatives and perspectives is not a matter of deadlines, but it is a matter of collaboration and clear communication.</p>
    <img src="./img/phases.png" />
  </DefaultPage>;
};
export default Phases;
