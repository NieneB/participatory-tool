import InteractivePanel from "../../components/InteractiveSidePanel";
import * as Styled from "../index.styles";
import DefaultPage from "../../components/DefaultPage";

const Phases = () => {
  const dataset = [
    {
      title: "Assesment",
      subtitle: "Assesment subtitle",
      content: "Explenation about phase Assesment here",
      info: "More info about Assesment here",
    },
    {
      title: "Inventarisation",
      content: "Explenation about phase Inventarisation here",
      info: "More info about Inventarisation here",
    },
    {
      title: "Definition",
      content: "Explenation about phase Definition here",
      info: "More info about Definition here",
    },
    {
      title: "Research",
      content: "Explenation about phase Research here",
      info: "More info about Research here",
    },
    {
      title: "Creation",
      content: "Explenation about phase Creation here",
      info: "More info about Creation here",
    },
    {
      title: "Dessimination",
      content: "Explenation about phase Dessimination here",
      info: "More info about Dessimination here",
    },
    {
      title: "Adaptation",
      content: "Explenation about phase Adaptation here",
      info: "More info about Adaptation here",
    },
  ];
  return <DefaultPage title="Phases" dataset={dataset}></DefaultPage>;
};
export default Phases;
