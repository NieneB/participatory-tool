import styled from "styled-components";
import * as Styled from "../index.styles";

const Panel = styled.div`
  border: solid 1px #929292;
  padding: 3rem;
`;
const Conditions = () => {
  return (
    <Styled.Main>
      <h1>Conditions</h1>

      <Panel>
        <h2>Area</h2>
      </Panel>
      <Panel>
        <h2>Stakeholders</h2>
      </Panel>
      <Panel>
        <h2>Relations</h2>
      </Panel>
      <Panel>
        <h2>Possibilities</h2>
      </Panel>
    </Styled.Main>
  );
};
export default Conditions;
