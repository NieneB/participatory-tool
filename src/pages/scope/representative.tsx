import DefaultPage from "../../components/DefaultPage";

const Representative = () => {
  const dataset = [
    {
      title: "Community organized",
      subtitle: "Organisation: Coöperatie Kloostersland ",
      role: "community representative ",
      objective: "orchestrating community involvement ",
      links: "https://www.kloostersland.nl/",

    },
    {
      title: "Government organized",
      subtitle: "Organisation: Rijksuniversiteit Groningen  ",
      role: "research representative ",
      objective: "creating institutional space ",
      links: " n.t.b",
    },
    {
      title: "Non-organized",
      subtitle: "Organisation: Design Academy Eindhoven ",
      role: ": participatory representative",
      objective: "identifying possibilities for participation ",
      links: " https://www.designacademy.nl/page/7817/go-cawh-endreport",
    }
   
  ];

  return (
    <DefaultPage title="Representative" dataset={dataset}>
      <p>The goal of the participatory process is to include and connect all perspectives, but that doesn’t mean that everybody should be involved with everything. Respecting each other expertise, perspective, knowledge, biases, etcetera, is essential in a participatory approach. Where they overlap; we work together and support each other in the process, but we each have our own objective. Those objectives combined with the objectives of the initiator, creates a balanced process. To support the strengths and recognize the difference in expertise, each position has a representative that is connected to the project process. Each position has a process of their own and each representative has their contributions to the whole.
      </p>
      <p>
        An important note for the participatory perspective; getting too deeply involved in the participatory process, may lead to a loss of objectivity; designers can get caught up in the specific dynamics of the community. Markus Miessen identifies this phenomenon in The Nightmare of Participation, in which designers risk becoming ́social workers ́, which can detract from the larger institutional interest and where designers' strengths lie.
      </p>
      <p>
        Each perspective has their own version of ‘The Nightmare of Participation’ and just like any other project, we believe that clearly defining the roles of the involved people, creates a work environment where people don’t have to guess who does what.
      </p>
      <img src="./img/representatives.png" />
    </DefaultPage>)
};
export default Representative;
