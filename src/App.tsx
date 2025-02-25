import {  Route, createRoutesFromElements, RouterProvider, createHashRouter } from "react-router-dom";
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
import NotFound from "./NotFound";
import RootLayout from "./RootLayout";


const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" index element={<Home />} />
      <Route path="approach" element={<Overview />} />
      <Route path="approach/scope" element={<Scope />} />
      <Route path="approach/positions" element={<Positions />} />
      <Route path="approach/actions" element={<Actions />} />
      <Route path="approach/scope/phases" element={<Phases />} />
      <Route path="approach/scope/conditions" element={<Conditions />} />
      <Route path="approach/scope/representative" element={<Representative />} />
      <Route path="approach/actions/methods" element={<Methods />} />
      <Route path="approach/actions/mapping" element={<GraphView />} />
      <Route path="approach/actions/activation" element={<Activation />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)
const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
