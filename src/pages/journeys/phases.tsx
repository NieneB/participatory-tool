import InteractivePanel from "src/components/InteractivePanel";
import * as Styled from "../index.styles";

const Phases = () => {
  return (
    <Styled.Main>
      <h1>Phases</h1>
      <InteractivePanel>
        <>
          <h2>Phase description</h2>
          <p>Extra info here</p>
        </>
      </InteractivePanel>
      <ol>
        <li>Assesment</li>
        <li>Inventarisation</li>
        <li>Definition</li>
        <li>Research</li>
        <li>Creation</li>
        <li>Dessimination</li>
        <li>Adaptation</li>
      </ol>
    </Styled.Main>
  );
};
export default Phases;
