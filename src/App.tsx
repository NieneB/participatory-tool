import {  Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages";
import GraphView from "./pages/graph-view";
import Intro from "./pages/explenation-view";
import Journey from "./pages/journey";
import Positions from "./pages/positions";

const App = () => {


  return (
      <HashRouter > 
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route path="info" element={<Intro />} />
          <Route path="graph" element={<GraphView />} />
          <Route path="journey" element={<Journey />} />
          <Route path="positions" element={<Positions />} />

        </Routes>
      </HashRouter>
  );
};

export default App;
