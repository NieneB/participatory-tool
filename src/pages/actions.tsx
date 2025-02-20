import { useState } from "react";
import * as Styled from "./index.styles";
import GraphD3 from "../components/perspectiveD3Graph";
import { Link } from "react-router-dom";
import { Button } from "./index.styles";
import Title from "../components/Title";
import InteractivePanel from "../components/InteractiveSidePanel";
import { MapsArrow } from "iconoir-react";
import NavBack from "../components/NavBack";
import Panel from "../components/Panel";

const Actions = () => {
  const [infoOn, setInfoOn] = useState(false);
  const [opening, setOpening] = useState(true);
  const [info, setInfo] = useState({});

  function toggleInfo(e, d: string) {
    console.log(d);
    if (d) {
      setInfoOn(true);
      setInfo(d);
      setOpening(false);
    } else {
      setInfoOn(false);
    }
  }

  function toggleOpening() {
    setOpening(false);
  }
  window.setTimeout(toggleOpening, 5000);
  return (
    <>
        <h1>Actions</h1>
        <p >
        How can you act on the questions and participation opportunities that arise?
        </p>
        <Styled.Buttons>
          <Link to="/actions/methods">
            <Panel color='yellow' title='Method & Tools' >
              <p>Identifying participation opportunities</p>
            </Panel>
          </Link>
          <Link to="/actions/mapping">
            <Panel color='purple' title='Mapping approach' >
              <p>Collecting participation opportunities </p>
              <MapsArrow
                color="var(--color-purple-main)"
                width={36}
                height={36}
                style={{ transform: "rotate(90deg)" }}
              />
            </Panel>
          </Link>
          <Link to="/actions/activation">
            <Panel color='pink' title='Activation' >
              <p>Acting on the participation opportunities</p>
            </Panel>
          </Link>
        </Styled.Buttons>
    </>
  );
};

export default Actions;
