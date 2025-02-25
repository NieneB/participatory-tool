import DefaultPage from "../../components/DefaultPage";
import dataset from "../content/activation.json"

const Activation = () => {

  return <>
    <DefaultPage key="activation" title="Activation" desc="Acting on the participation opportunities" dataset={dataset}>
      <p>How can you identify the participation opportunities during the participatory process?
      </p>
      <p>
        The tools work together with the phases, that work together with the actor mapping that work with the activation, with the representatives involved. The methods and tools do not stand on their own, but work best in the framework we provide. Choosing to use the methods and tools described below is always a possibility, but please be aware that the managing of expectations is carefully curated in the sequence of the phases.
      </p>
      <p>
        All information provided below is subject to change by assessments in the field. These pages will be every growing with information and we welcome our users to share their feedback.
      </p>
      <img src="./img/activations.png" />
    </DefaultPage>
  </>
};
export default Activation;
