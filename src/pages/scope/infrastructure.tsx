import styled from "styled-components";
import * as Styled from "../index.styles";
import NavBack from "src/components/NavBack";

const Panel = styled.div`
  border: solid 1px #929292;
  padding: 3rem;
`;

const Main = styled.div`
   width: 50vw;
  height: auto;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: auto;
  margin-top: 3rem;

  @media only screen and (width <=992px) {
    width: 70vw;
  }
  @media only screen and (width <=600px) {
    overflow-y: auto;
    height: auto;
    width: 80vw;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`
const Infrastructure = () => {
  return (
    <Main>
      <NavBack/>
      <h1>Infrastructure</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia,
        massa vel lacinia auctor, est leo ullamcorper ligula, vitae vehicula
        quam arcu vel mauris. Suspendisse posuere varius libero id ultricies.
        Nam aliquet ex id tempor ultrices. Nunc eu mauris bibendum, feugiat leo
        in, tincidunt turpis. Aenean tempus mattis rutrum. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Curabitur feugiat mi dolor. Quisque facilisis tellus sollicitudin nisi
        imperdiet rhoncus. Curabitur tempor nibh non turpis eleifend suscipit.
        Maecenas rhoncus elit nec dapibus cursus. Suspendisse potenti. Nullam eu
        pulvinar ipsum, at eleifend mi. Duis commodo, neque nec dapibus mattis,
        urna lectus suscipit ante, nec vestibulum elit enim ac ante. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Fusce elementum feugiat justo vitae cursus. Vivamus et neque
        dapibus, commodo erat vitae, interdum quam.{" "}
      </p>
      <Panel>
        <h2>titel 1 </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia, massa vel lacinia auctor, est leo ullamcorper ligula, vitae vehicula quam arcu vel mauris. Suspendisse posuere varius libero id ultricies. Nam aliquet ex id tempor ultrices. Nunc eu mauris bibendum, feugiat leo in, tincidunt turpis. Aenean tempus mattis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur feugiat mi dolor. Quisque facilisis tellus sollicitudin nisi imperdiet rhoncus. Curabitur tempor nibh non turpis eleifend suscipit. Maecenas rhoncus elit nec dapibus cursus. Suspendisse potenti. Nullam eu pulvinar ipsum, at eleifend mi. Duis commodo, neque nec dapibus mattis, urna lectus suscipit ante, nec vestibulum elit enim ac ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce elementum feugiat justo vitae cursus. Vivamus et neque dapibus, commodo erat vitae, interdum quam. </p>
      </Panel>
      <Panel>
        <h2>titel 1B</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia, massa vel lacinia auctor, est leo ullamcorper ligula, vitae vehicula quam arcu vel mauris. Suspendisse posuere varius libero id ultricies. Nam aliquet ex id tempor ultrices. Nunc eu mauris bibendum, feugiat leo in, tincidunt turpis. Aenean tempus mattis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur feugiat mi dolor. Quisque facilisis tellus sollicitudin nisi imperdiet rhoncus. Curabitur tempor nibh non turpis eleifend suscipit. Maecenas rhoncus elit nec dapibus cursus. Suspendisse potenti. Nullam eu pulvinar ipsum, at eleifend mi. Duis commodo, neque nec dapibus mattis, urna lectus suscipit ante, nec vestibulum elit enim ac ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce elementum feugiat justo vitae cursus. Vivamus et neque dapibus, commodo erat vitae, interdum quam. </p>
      </Panel>
      <Panel>
        <h2>titel 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia, massa vel lacinia auctor, est leo ullamcorper ligula, vitae vehicula quam arcu vel mauris. Suspendisse posuere varius libero id ultricies. Nam aliquet ex id tempor ultrices. Nunc eu mauris bibendum, feugiat leo in, tincidunt turpis. Aenean tempus mattis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur feugiat mi dolor. Quisque facilisis tellus sollicitudin nisi imperdiet rhoncus. Curabitur tempor nibh non turpis eleifend suscipit. Maecenas rhoncus elit nec dapibus cursus. Suspendisse potenti. Nullam eu pulvinar ipsum, at eleifend mi. Duis commodo, neque nec dapibus mattis, urna lectus suscipit ante, nec vestibulum elit enim ac ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce elementum feugiat justo vitae cursus. Vivamus et neque dapibus, commodo erat vitae, interdum quam. </p>
      </Panel>
      <Panel>
        <h2>titel 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia, massa vel lacinia auctor, est leo ullamcorper ligula, vitae vehicula quam arcu vel mauris. Suspendisse posuere varius libero id ultricies. Nam aliquet ex id tempor ultrices. Nunc eu mauris bibendum, feugiat leo in, tincidunt turpis. Aenean tempus mattis rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur feugiat mi dolor. Quisque facilisis tellus sollicitudin nisi imperdiet rhoncus. Curabitur tempor nibh non turpis eleifend suscipit. Maecenas rhoncus elit nec dapibus cursus. Suspendisse potenti. Nullam eu pulvinar ipsum, at eleifend mi. Duis commodo, neque nec dapibus mattis, urna lectus suscipit ante, nec vestibulum elit enim ac ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce elementum feugiat justo vitae cursus. Vivamus et neque dapibus, commodo erat vitae, interdum quam. </p>
      </Panel>
    </Main>
  );
};
export default Infrastructure;
