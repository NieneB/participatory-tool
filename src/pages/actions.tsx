import { useState } from "react";
import * as Styled from "./index.styles";
import GraphD3 from "../components/perspectiveD3Graph";
import { Link } from "react-router-dom";
import { Button } from "./index.styles";
import Title from "src/components/Title";
import InteractivePanel from "src/components/InteractiveSidePanel";
import { MapsArrow } from "iconoir-react";
import NavBack from "src/components/NavBack";
import Panel from "src/components/Panel";

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
      <Styled.Main>
        <h1>Actions</h1>
        <p style={{ width: "50vw" }}>
          Nulla venenatis est et neque commodo pulvinar. Nam vel vestibulum
          mauris. Nulla fringilla libero quam, nec pharetra ipsum pharetra eu.
          Nullam in purus eget ipsum finibus gravida. Ut eu sem hendrerit,
          tempus sem <a href="" >dignissim, ullamcorper</a> nisi. Duis venenatis, metus eget
          egestas aliquam, diam sapien porta metus, sed tristique erat risus ut
          tortor. Duis placerat enim tellus, vitae laoreet tellus rutrum non.
          Nunc urna diam, tristique eu malesuada sollicitudin, volutpat sed
          nisl.{" "}
        </p>
        <Styled.Buttons>

          <Link to="/actions/methods">
            {" "}
            <Panel color='yellow' title='Method & Tools' >
              <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
            </Panel>
          </Link>
          <Link to="/actions/mapping">
            <Panel color='purple' title='Mapping approach' >
              <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>
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
              <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit</p>

            </Panel>
          </Link>

        </Styled.Buttons>
      </Styled.Main>
    </>
  );
};

export default Actions;
