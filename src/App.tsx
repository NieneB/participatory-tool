import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages";
import GraphView from "./pages/graph-view";
import Intro from "./pages/explenation-view";

const App = () => {


  return (
    <>
      <HashRouter > 
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route path="info" element={<Intro />} />
          <Route path="graph" element={<GraphView />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
