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

  const data = {
    nodes: [
      {
        id: "Individual",
        desc: "Lorem ipsum dolor sit amet. Sit excepturi nesciunt et tempora repudiandae est maxime similique et libero aperiam a consequatur modi vel consequatur ducimus. Eos quasi esse sed quos ipsum aut necessitatibus provident id doloremque adipisci qui aperiam enim. Aut dolorem voluptatem est praesentium labore sed suscipit enim.Non accusantium placeat id enim eligendi hic voluptatum veniam hic soluta minus. Eum magnam culpa qui fugiat eius et molestias aspernatur qui impedit veniam. Sit enim ducimus ad maiores nihil qui laudantium galisum. Ut galisum totam et molestiae fugit non porro fugit a labore officiis qui impedit cupiditate est quia eaque aut veniam sint. ",
      },
      {
        id: "Community",
        desc: "Lorem ipsum dolor sit amet. Sit excepturi nesciunt et tempora repudiandae est maxime similique et libero aperiam a consequatur modi vel consequatur ducimus. Eos quasi esse sed quos ipsum aut necessitatibus provident id doloremque adipisci qui aperiam enim. galisum. Ut galisum totam et molestiae fugit non porro fugit a labore officiis qui impedit cupiditate est quia eaque aut veniam sint. ",
      },
      {
        id: "Governmental",
        desc: "Lorem ipsum dolor sit amet. Sit excepturi nesciunt et tempora repudiandae est maxime similique et libero aperiam a consequatur modi vel consequatur duut necessitatibus provident id doloremque adipisci qui aperiam enim. Aut dolorem voluptatem est praesentium labore sed suscipit enim.Non accusantium placeat id enim eligendi hic voluptatum veniam hic soluta minus. Eum magnam culpa qui fugiat eius et molestias aspernatur qui impedit veniam. Sit enim ducimus ad maiores nihil qui laudantium galisum. Ut galisum totam et molestiae fugit non porro fugit a labore officiis qui impedit cupiditate est quia eaque aut veniam sint. ",
      },
    ],
    links: [
      { source: "Individual", target: "Governmental", value: 1 },
      { source: "Community", target: "Individual", value: 1 },
      { source: "Governmental", target: "Community", value: 1 },
    ],
  };

  return (
    <>
      <Styled.Left>
        <InteractivePanel>
          <Title></Title>
        </InteractivePanel>
        <InteractivePanel>
          <>
            <h1> Importance of the 3 positions of stakeholders</h1>
            <p>Click on one of the positions to explore there content</p>
          </>
        </InteractivePanel>
        {infoOn && info && (
          <InteractivePanel>
            <>
              <h1>{info.id}</h1>
              <p>{info.desc} </p>
            </>
          </InteractivePanel>
        )}
      </Styled.Left>
      <Styled.PanelBack>
        <GraphD3 data={data} toggleInfo={toggleInfo}></GraphD3>
      </Styled.PanelBack>
      <Styled.NavButton>
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
      </Styled.NavButton>
    </>
  );
};

export default Intro;
