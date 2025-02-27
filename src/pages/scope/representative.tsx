import DefaultPage from "../../components/DefaultPage";
import dataset from "../content/representatives.json"

const Representative = () => {

  return (
    <DefaultPage title="Representative" dataset={dataset}>

      <p>
        Each perspective has their own value to add, but they also have their limitations. The challenge is to balance all the approaches, so that they complement and reinforce each other, rather than conflict and contradict each other. The goal of the participatory process is to include and connect all perspectives, but that doesn’t mean that everybody should be involved with everything.
      </p>
      <p>
        Respecting each other expertise, perspective, knowledge, biases, etcetera, is essential in a participatory approach. Where activities overlap, we work together, but we each have our own objective. To support the strengths and to recognize the differences in expertise, each position has a representative that is connected to the project team, involved with the use case.
      </p>
      <p>
        An important note for the participatory representative; getting too deeply involved in the participatory process, may lead to a loss of objectivity; designers can get caught up in the specific dynamics of the community. Markus Miessen identifies this phenomenon in The Nightmare of Participation, in which designers risk becoming ́social workers ́, which can detract from the larger institutional interest and where designers' strengths lie.
      </p>
      <p>
        Each perspective has their own version of ‘The Nightmare of Participation’ and just like any other project, we believe that clearly defining the roles of the involved people, creates a professional work environment where people don’t have to guess who does what and when.
      </p>


      <img src="./img/representatives.png" />
    </DefaultPage>)
};
export default Representative;
