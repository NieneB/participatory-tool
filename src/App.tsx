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

const App = () => {
  return (
    <HashRouter>
      <Link to="/">
        <img id="logo" src='./img/logo-go-cawh.svg' /> </Link>
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
        <Route path="/:filename" element={<DefaultMarkdownPage />} />
      </Routes>

    </HashRouter>
  );
};

export default App;
