import DefaultPage from "../../components/DefaultPage";
import methodDataset from '../content/methods.json'
const Methods = () => {


  return (
    <>
      <DefaultPage key="methods" title="Methods & Tools" desc="How can you identify the participation opportunities during the participatory process?" dataset={methodDataset}>
        <p>
          The tools and methods described below are entangled with the phases. The phases work together with the actor mapping, that work with the activation, with the representatives involved and so on. The methods and tools do not stand on their own, but work best in the framework we provide on this website. Choosing to use the methods and tools described below outside of this framework, is always a possibility, but please be aware that the managing of expectations is carefully curated in the designing of the sequence of the phases.</p>
        <p>
          Each tool described does not implicitly state a role in the project management process. The below tools are only used from the participatory perspective, which creates very different outcomes than used by another perspective. Please be aware that collectively using these tools does not create better results.
        </p>
        <p>
        All information provided below is subject to change by assessments in the field. These pages will be every growing with information and we welcome our users to share their feedback.
        </p>
        <img src="./img/methods.png" />
      </DefaultPage>
    </>
  )

};
export default Methods;
