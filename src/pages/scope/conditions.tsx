import { Link } from "react-router-dom";
import DefaultPage from "../../components/DefaultPage";
import dataset from "../content/conditions.json"


const Conditions = () => {
  return (
    <DefaultPage title="Conditions" dataset={dataset}>
      <p>Working together in a process with high expectations, many voices looking to be heard and many interests at play, requires preparation.  </p>
      <p>We have the experience that assuming that all team members share the same need for the same conditions, is almost never the case. If we would start off this process by assuming that we all have the same needs, we would’t do justice to the position that we represent, which stands for explicitly communicating about eachothers needs, strengths and weaknesses.
      </p>
      <p>
        As a <Link to="/approach/scope/representative" >representative </Link> for the participatory position, you are also an actor in this process. Your objective is to identify possibilities for participation to support informed decision making in the design process. To do that, we advise you to take the following elements into account before kicking off the participatory process:
      </p>
      <img src="" />
    </DefaultPage>
  );
};
export default Conditions;
