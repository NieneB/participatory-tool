import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages";
import Scope from "./pages/scope";
import Infrastructure from "./pages/scope/infrastructure";
import Representative from "./pages/scope/representative";
import Phases from "./pages/scope/phases";
import Positions from "./pages/positions";
import Actions from "./pages/actions";
import Activation from "./pages/actions/activation";
import GraphView from "./pages/actions/graph-view";
import Methods from "./pages/actions/methods";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" index element={<Home />} />
        <Route path="scope" element={<Scope />} />
        <Route path="positions" element={<Positions />} />
        <Route path="actions" element={<Actions />} />
        <Route path="scope/phases" element={<Phases />} />
        <Route path="scope/infrastructure" element={<Infrastructure />} />
        <Route path="scope/representative" element={<Representative />} />
        <Route path="actions/methods" element={<Methods />} />
        <Route path="actions/mapping" element={<GraphView />} />
        <Route path="actions/activation" element={<Activation />} />

        {/* <Route path="graph" element={<GraphView />} /> */}
      </Routes>
    </HashRouter>
  );
};

export default App;
