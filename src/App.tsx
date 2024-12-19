import {  Routes, Route, HashRouter, useNavigate } from "react-router-dom";
import Home from "./pages";
import GraphView from "./pages/actions/graph-view";
import Intro from "./pages/actions";
import Journeys from "./pages/journeys";
import Positions from "./pages/positions";
import Phases from "./pages/journeys/phases";
import Conditions from "./pages/journeys/conditions";
import People from "./pages/journeys/people";
import Actions from "./pages/actions";
import Activation from "./pages/actions/activation";
import Methods from "./pages/actions/methods";
import { ArrowLeft } from "iconoir-react";

const App = () => {

  

  return (
    <HashRouter > 
        
        
        
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route path="actions" element={<Actions />} />
          <Route path="journeys" element={<Journeys />} />
          <Route path="positions" element={<Positions />} />
          <Route path="positions/phases" element={<Phases />} />
          <Route path="positions/conditions" element={<Conditions />} />
          <Route path="positions/people" element={<People />} />
          <Route path="actions/methods" element={<Methods />} />
          <Route path="actions/mapping" element={<GraphView />} />
          <Route path="actions/activation" element={<Activation />} />


          {/* <Route path="graph" element={<GraphView />} /> */}

        
        </Routes>
      </HashRouter>
  );
};

export default App;
