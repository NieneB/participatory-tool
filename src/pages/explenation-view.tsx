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
        <h1>Actions</h1>
        <p>
          <p>
            Nulla venenatis est et neque commodo pulvinar. Nam vel vestibulum
            mauris. Nulla fringilla libero quam, nec pharetra ipsum pharetra eu.
            Nullam in purus eget ipsum finibus gravida. Ut eu sem hendrerit,
            tempus sem dignissim, ullamcorper nisi. Duis venenatis, metus eget
            egestas aliquam, diam sapien porta metus, sed tristique erat risus
            ut tortor. Duis placerat enim tellus, vitae laoreet tellus rutrum
            non. Nunc urna diam, tristique eu malesuada sollicitudin, volutpat
            sed nisl.{" "}
          </p>
        </p>
        <Styled.Buttons>
          <Styled.Button>
            <h2>Method & Tools</h2>
          </Styled.Button>
          <Link className="bottom-right" to="/graph">
            <Styled.Button>
              <MapsArrow
                color="black"
                width={36}
                height={36}
                style={{ transform: "rotate(90deg)" }}
              />
              <h2>Mapping approach</h2>
            </Styled.Button>
          </Link>
          <Styled.Button>
            <h2>Activation</h2>
          </Styled.Button>
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
