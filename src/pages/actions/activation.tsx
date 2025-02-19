import InteractivePanel from "src/components/InteractiveSidePanel";
import * as Styled from "../index.styles";
import DefaultPage from "src/components/DefaultPage";

const Activation = () => {
  const dataset = [
    { title: "activation 1", content: "Lorum ipsum" , info: "Lorum ipsum more 1"},
    { title: "activation 2", content: "Lorum ipsum" , info: "Lorum ipsum more 2"},
    { title: "activation 3", content: "Lorum ipsum" , info: "Lorum ipsum more 3"},
    { title: "activation 4", content: "Lorum ipsum" , info: "Lorum ipsum more 4"},
  ];
  return <DefaultPage title="Activation" dataset={dataset}></DefaultPage>;
};
export default Activation;
