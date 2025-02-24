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
      title: "Non-organized",
      subtitle: "Organisation: Design Academy Eindhoven ",
      role: "research representative ",
      objective: "creating institutional space ",
      links: " n.t.b",
    },
    {
      title: "Government organized",
      subtitle: "Organisation: Rijksuniversiteit Groningen  ",
      role: "participatory representative ",
      objective: "identifying possibilities for participation ",
      links: " https://www.designacademy.nl/page/7817/go-cawh-endreport",
    }
  ];

  return (
    <DefaultPage title="Representative" dataset={dataset}>
      <p>The goal of the participatory process is to include and connect all perspectives, but that doesn’t mean that everybody can do everything. Respecting each other expertise, perspective, knowledge, biases, etc is essential in a participatory approach. To create a clear overview of each person involved in the process, below you can find a description of the different roles per perspective and the connection visualized in the illustration.
      </p>
      <p>
        From the designers perspective; too much involvement in the participatory process can lead to a loss of objectivity; designers can get caught up in the specific dynamics of the community. Markus Miessen identifies this phenomenon in The Nightmare of Participation, in which designers risk becoming ́social workers ́, which can detract from the larger institutional interest and where designers' strengths lie.
      </p>
      <p>
        Each perspective has their own version of ‘The Nightmare of Participation’ and just like any other project, we believe that clearly defining the roles of the involved people, creates a work environment where people don’t have to guess who does what. </p>
      <img src="./img/representatives.png" />
    </DefaultPage>)
};
export default Representative;
