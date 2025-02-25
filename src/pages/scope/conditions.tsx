import { Link } from "react-router-dom";
import DefaultPage from "../../components/DefaultPage";
import dataset from "../content/conditions.json"


const Conditions = () => {
  return (
    <DefaultPage title="Conditions" dataset={dataset}>
      <p>Working together in a process with high expectations, involvement of different actors and a need for clear communication, requires preparation. </p>
      <p>We collectively have the experience that assuming we all share the same need for the same conditions, is almost always presumptuous. If we would start off by assuming that we all have the same needs, we would not do justice to the perspective that we represent, that stands for explicitly enquire, research, communicate and sharing each others position, needs, strengths and weaknesses.
      </p>
      <p> 
        As a <Link to="/approach/scope/representative" >representative </Link>of the participatory perspective we are also an actor in this process. Our objective is to identify possibilities for participation to support informed decision making. To do that, there are a few elements to take into account before kicking off the process:
      </p>
      <img src="" />
    </DefaultPage>
  );
};
export default Conditions;
