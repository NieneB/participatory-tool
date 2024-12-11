import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import GraphView from "./pages/graph-view";
import Intro from "./pages/explenation-view";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="info" element={<Intro />} />
          <Route path="graph" element={<GraphView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
