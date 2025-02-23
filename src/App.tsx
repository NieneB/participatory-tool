import { Routes, Route, HashRouter, Link } from "react-router-dom";
import Home from "./pages";
import Scope from "./pages/scope";
import Representative from "./pages/scope/representative";
import Phases from "./pages/scope/phases";
import Positions from "./pages/positions";
import Actions from "./pages/actions";
import Activation from "./pages/actions/activation";
import GraphView from "./pages/actions/graph-view";
import Methods from "./pages/actions/methods";
import Overview from "./pages/overview";
import Community from "./pages/positions/community-organized";
import Conditions from "./pages/scope/conditions";
import DefaultMarkdownPage from "./components/DefaultMarkdownPage";
import styled from "styled-components";
import NavBack from "./components/NavBack";

export const MainContent = styled.div`
  width: 50vw;
  min-height: calc(100vh - 2rem);
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap : 1rem;
  margin: auto;
  padding-top: 2rem;

  /* Normal HD screen (mijn comp)*/
@media only screen and (width <= 1950px) {
  width: 40vw;

}

  @media only screen and (width <=1500px) {
    width: 60vw;
  }
  @media only screen and (width <=992px) {
    width: 70vw;
  }
  @media only screen and (width <=600px) {
    overflow-y: auto;
    height: auto;
    width: 80vw;
    padding-top: 3rem;
    padding-bottom: 3rem;

    align-items: center;

  }

  

`;

const Logo = styled.img`
    padding: 2rem;
    position: fixed;
    width: 7vw;


  @media only screen and (width <=600px) {
    padding: 1rem;

  }

`

const App = () => {
  return (
    <HashRouter>
      <Link to="/">
        <Logo id="logo" src='./img/logo-go-cawh.svg' /> </Link>
      <MainContent>
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route path="overview" element={<Overview />} />
          <Route path="scope" element={<Scope />} />
          <Route path="positions" element={<Positions />} />
          <Route path="actions" element={<Actions />} />
          <Route path="scope/phases" element={<Phases />} />
          <Route path="scope/conditions" element={<Conditions />} />
          <Route path="scope/representative" element={<Representative />} />
          <Route path="actions/methods" element={<Methods />} />
          <Route path="actions/mapping" element={<GraphView />} />
          <Route path="actions/activation" element={<Activation />} />
          <Route path="positions/non-organized" element={<Community />} />
          <Route path="positions/community-organized" element={<Community />} />
          <Route path="positions/government-organized" element={<Community />} />
          <Route path="/:filename" element={<DefaultMarkdownPage fileInput={''} />} />
        </Routes>
      </MainContent>
    </HashRouter>
  );
};

export default App;
