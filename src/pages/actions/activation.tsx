import DefaultPage from "../../components/DefaultPage";

const Activation = () => {
  const dataset = [
    {
      title: "Written proposal",
      subtitle: "Matching the requirements and expectations in a written project proposal to create a supported and realistic approach",
      phase: "Assessment Phase",
      objective: "",
      description: "",
      audience: "",
      use: "",
      source: "",
      mapping: "using the parameters of the actor network map as input for the assessment",
      methods: "",
      goal: "mapping the expectations of the participation process ahead",
      assignment: "to collect and verify the requirements available and/ or needed for the participation process",
      output: "collective expectation for the participation process ahead",
      iteration: "discrepancy between the expectations of internal parties",
    },
    {
      title: "Sharing information ",
      subtitle: "Connecting and exchanging data with the other perspectives",
      phase: "Exploration Phase",
      objective: "",
      description: "",
      audience: "",
      use: "",
      source: "",
      mapping: "filling up the generic template to create a contextual actor network map",
      methods: "",
      goal: "studying what actors are there and how are they related",
      assignment: "to collect and verify the information regarding the area, actors and relations between the actors",
      output: "overview of the area, the actors and relations",
      iteration: "questions/ tensions/ assumptions about the definition of the area, actors or relations",
    },
    {
      title: "Onboarding",
      subtitle: "onboarding the actors for the participation process ahead",
      phase: "Exploration Phase",
      objective: "",
      description: "",
      audience: "",
      use: "",
      source: "",
      mapping: "analyzing the actor network map",
      methods: "",
      goal: "defining the potentials for participation",
      assignment: "to identify possibilities for participation",
      output: "insights and definition of specific research need",
      iteration: "the area/ actors/ relations/ conditions have changed",
    },
    {
      title: "Sharing insights",
      subtitle: "sharing the new findings with the actors",
      phase: "Exploration Phase",
      objective: "",
      description: "",
      audience: "",
      use: "",
      source: "",
      mapping: "using the available visual stories to identify the focus for the sessions",
      methods: "",
      goal: "defining the aim of the participation",
      assignment: "filling the knowledge gaps to turn the possibilities into participation chances",
      output: "participation chances to act on",
      iteration: "discrepancy expectations of creating phase",
    },
    {
      title: "Feedback Sessions",
      subtitle: "",
      phase: "Exploration Phase",
      objective: "",
      description: "",
      audience: "",
      use: "",
      source: "",
      mapping: "using the available visual stories for informative purposes",
      methods: "",
      goal: "co-creating space for the differences and connections between stakeholders",
      assignment: "designing, producing en documenting participation sessions",
      output: "registration of co creation sessions",
      iteration: "discrepancy between the expectations of external parties",
    },
    {
      title: "Presentation in person",
      subtitle: "presenting the insights to other use cases by an interactive presentation (lecture/ workshop/ live presentation) where feedback and potential adaptations can be collected",
      phase: "Dessimination Phase",
      objective: "",
      description: "",
      audience: "",
      use: "",
      source: "",
      mapping: "using the available visual stories for illustrative purposes",
      methods: "",
      goal: "presenting the outcomes of the participation sessions",
      assignment: "transforming the collected information to actionable insights fitting the audience",
      output: "collection of the findings and learnings",
      iteration: " need for references",
    },
    {
      title: "Reporting",
      subtitle: "sharing a report with the design team, in collaboration with the other perspectives",
      phase: "Adaptation Phase",
      objective: "",
      description: "",
      audience: "",
      use: "",
      source: "",
      mapping: "using the collected data as input for the design team",
      methods: "",
      goal: "applying the outcomes to the reality",
      assignment: "defining the potential impact of the output",
      output: "guidance to apply findings and learnings",
      iteration: "questions about the applicability",
    },

  ];
  return <>
    <DefaultPage title="Activation" desc="Acting on the participation opportunities" dataset={dataset}>
      <p>How can you identify the participation opportunities during the participatory process?
      </p>
      <p>
        The tools work together with the phases, that work together with the actor mapping that work with the activation, with the representatives involved. The methods and tools do not stand on their own, but work best in the framework we provide. Choosing to use the methods and tools described below is always a possibility, but please be aware that the managing of expectations is carefully curated in the sequence of the phases.
      </p>
      <p>

        All information provided below is subject to change by assessments in the field. These pages will be every growing with information and we welcome our users to share their feedback.
      </p>
      <img src="" />
    </DefaultPage>
  </>
};
export default Activation;
