import { useState } from "react";
import * as Styled from "./index.styles";
import GraphD3 from "../components/perspectiveD3Graph";
import { Link } from "react-router-dom";
import { Button } from "./index.styles";
import Title from "src/components/Title";
import InteractivePanel from "src/components/InteractivePanel";
import { MapsArrow } from "iconoir-react";

const Intro = () => {
  const [infoOn, setInfoOn] = useState(false);
  const [opening, setOpening] = useState(true);
  const [info, setInfo] = useState({});

  function toggleInfo(e, d: string) {
    e.preventDefault();
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
      <Styled.Left>
        <InteractivePanel>
          <Title></Title>
        </InteractivePanel>
      </Styled.Left>
      <Styled.Main>
        <h1>Tools</h1>
        <Styled.Buttons>
          <Styled.Button>
            <h2>Method</h2>
          </Styled.Button>

          <Styled.Button>
            <h2>Workshop materials</h2>
          </Styled.Button>
          <Link className="bottom-right" to="/graph">
            <Styled.Button>
              <MapsArrow
                color="black"
                width={36}
                height={36}
                style={{ transform: "rotate(90deg)" }}
              />
              <h2>Mapping Tool</h2>
            </Styled.Button>
          </Link>
        </Styled.Buttons>
      </Styled.Main>
      {/* <Styled.NavButton>
        <Link className="bottom-right" to="/graph">
          <Button>
            {" "}
            Go to the Actor Mapping{" "}
            <MapsArrow
              color="black"
              width={36}
              height={36}
              style={{ transform: "rotate(90deg)" }}
            />
          </Button>
        </Link>
      </Styled.NavButton> */}
    </>
  );
};

export default Intro;
