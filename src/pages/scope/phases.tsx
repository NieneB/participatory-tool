import DefaultPage from "../../components/DefaultPage";

const Phases = () => {
  const dataset = [
    {
      title: "Assessment Phase",
      subtitle: "In this phase the main focus is to answer the question: why are we starting this participation process?",
      goal: "mapping the expectations of the participation process ahead",
      assignment: "to collect and verify the requirements available and/ or needed for the participation process",
      using: [
        "Methods & tools: structured interviews, participatory mapping",
        "Mapping approach: using the parameters of the actor network map as input for the assessment",
        "Activation: matching the requirements and expectations in a written project proposal to create a supported and realistic approach"
      ],
      output: "collective expectation for the participation process ahead",
      iteration: "discrepancy between the expectations of internal parties",
    },
    {
      title: "Exploration Phase",
      subtitle: "In this phase the main focus is to answer the question: who is here?",
      goal: "studying what actors are there and how are they related",
      assignment: "to collect and verify the information regarding the area, actors and relations between the actors",
      using: [
        "Methods & tools: actor mapping, surveys, online ethnography, web scraping tool",
        "Mapping approach: filling up the generic template to create a contextual actor network map",
        "Activation: connecting and exchanging data with the other perspectives"
      ],
      output: "overview of the area, the actors and relations",
      iteration: "questions/ tensions/ assumptions about the definition of the area, actors or relations",
    },
    {
      title: "Definition Phase",
      subtitle: "In this phase the main focus is to answer the question: who and what do we know and have?",
      goal: "defining the potentials for participation",
      assignment: "to identify possibilities for participation",
      using: [
        "Methods & tools: mind mapping, personas, journey mapping, relational mapping, focus groups",
        "Mapping approach: analyzing the actor network map",
        "Activation: onboarding the actors for the participation process ahead"
      ],
      output: "insights and definition of specific research need",
      iteration: "the area/ actors/ relations/ conditions have changed",
    },
    {
      title: "Research Phase",
      subtitle: "In this phase the main focus is to answer the question: who and what don’t we know or have?",
      goal: "defining the aim of the participation",
      assignment: "filling the knowledge gaps to turn the possibilities into participation chances",
      using: [
        "Methods & tools: behavior mapping, data visualisation, forecasting",
        "Mapping approach: using the available visual stories to identify the focus for the sessions",
        "Activation: sharing the new findings with the actors"
      ],
      output: "participation chances to act on",
      iteration: "discrepancy expectations of creating phase",
    },
    {
      title: "Co-creation phase ",
      subtitle: "In this phase the main focus is to answer the question: what do we need for participation?",
      goal: "co-creating space for the differences and connections between stakeholders",
      assignment: "designing, producing en documenting participation sessions",
      using: [
        "Methods & tools: scenario building, empathy mapping, serious games, tangible tools, participatory mapping, cultural probes",
        "Mapping approach: using the available visual stories for informative purposes",
        "Activation: feedback sessions"
      ],
      output: "registration of co creation sessions",
      iteration: "discrepancy between the expectations of external parties",
    },
    {
      title: "Dessimination phase",
      subtitle: "In this phase the main focus is to answer the question: what did we learn?",
      goal: "presenting the outcomes of the participation sessions",
      assignment: "transforming the collected information to actionable insights fitting the audience",
      using: [
        "Methods & tools: storytelling, data visualisation",
        "Mapping approach: using the available visual stories for illustrative purposes",
        "Activation: presenting the insights to other use cases by an interactive presentation (lecture/ workshop/ live presentation) where feedback and potential adaptations can be collected"
      ],
      output: "collection of the findings and learnings",
      iteration: "need for references",
    },
    {
      title: "Adaptation Phase",
      subtitle: "In this phase the main focus is to answer the question: how can we act?",
      goal: "applying the outcomes to the reality",
      assignment: "defining the potential impact of the output",
      using: [
        "Methods & tools: backcasting, prototyping",
        "Mapping approach: using the collected data as input for the design team",
        "Activation: sharing a report with the design team, in collaboration with the other perspectives"
      ],
      output: "guidance to apply findings and learnings",
      iteration: "questions about the applicability",
    },
  ];
  return <DefaultPage title="Phases" desc="What should we do and when? This overview describes the phases of the process, led by the participatory position. Since the nature of these processes are never linear, we’ve created a visual model to illustrate the iterative reality of working together with different perspectives in contexts that vary." dataset={dataset}>
    <p>What should we do and when? This overview describes the phases of the process, led by the participatory position. Since the nature of these processes are never linear, we’ve created a visual model to illustrate the iterative reality of working together with different perspectives in contexts that vary.</p>
    <p>Each phase describes very clearly what the goals and suggested means to reach that goal are. Please note that in any case, the answer can also be; no, or none or nobody. The participatory approach is here to explore, identify and apply possibilities for participation. The scope of the approach depends on the context, the needs, expectations and available resources. </p>
    <p>The participaptory process is an iterative process. If we are not flexible enough in our approach to respond to an ever changing situation, participation cannot be supported. Involving people, initiatives and perspectives is not a matter of deadlines, but it is a matter of collaboration. </p>
    <p>The iterative process is not a circular one, but steps that are subsequent. If we go back to a step, we then follow up by walking through the steps after that. </p>
    <img src="./img/iterative waterfall model.png"/>
  </DefaultPage>;
};
export default Phases;
