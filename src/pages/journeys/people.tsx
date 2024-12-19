import InteractivePanel from "src/components/InteractivePanel";
import * as Styled from "../index.styles";
import DefaultPage from "src/components/DefaultPage";

const People = () => {
  const dataset = [{ title: "Individual", content: "", info: "" },
    { title: "Community", content: "", info: "" },
    { title: "Government", content: "", info: "" }
  ];

  return <DefaultPage title="People" dataset={dataset}></DefaultPage>;
};
export default People;
