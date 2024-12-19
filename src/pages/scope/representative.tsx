import InteractivePanel from "src/components/InteractivePanel";
import * as Styled from "../index.styles";
import DefaultPage from "src/components/DefaultPage";

const Representative = () => {
  const dataset = [{ title: "Non-organized", content: "", info: "" },
    { title: "Community organized", content: "", info: "" },
    { title: "Government organized", content: "", info: "" }
  ];

  return <DefaultPage title="Representative" dataset={dataset}></DefaultPage>;
};
export default Representative;
