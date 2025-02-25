import * as Styled from "./index.styles";
import { NavLink } from "react-router-dom";
import Panel from "../components/Panel";
import NavBack from "../components/NavBack";

const Actions = () => {
  // const [infoOn, setInfoOn] = useState(false);
  // const [opening, setOpening] = useState(true);
  // const [info, setInfo] = useState({});

  // function toggleInfo(e, d: string) {
  //   console.log(d);
  //   if (d) {
  //     setInfoOn(true);
  //     setInfo(d);
  //     setOpening(false);
  //   } else {
  //     setInfoOn(false);
  //   }
  // }

  // function toggleOpening() {
  //   setOpening(false);
  // }
  // window.setTimeout(toggleOpening, 5000);
  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" :"top" }>
          <NavBack />
        <h1>Actions</h1>
        <p >
        How can you act on the questions and participation opportunities that arise?
        </p>
        <Styled.Buttons>
          <NavLink to="/approach/actions/methods">
            <Panel color='second-rank' title='Method & Tools' >
              <p>Identifying participation opportunities</p>
            </Panel>
          </NavLink>
          <NavLink to="/approach/actions/mapping">
            <Panel color='second-rank' title='Mapping approach' >
              <p>Collecting participation opportunities </p>
             
            </Panel>
          </NavLink>
          <NavLink to="/approach/actions/activation">
            <Panel color='second-rank' title='Activation' >
              <p>Acting on the participation opportunities</p>
            </Panel>
          </NavLink>
        </Styled.Buttons>
    </div>
  );
};

export default Actions;
