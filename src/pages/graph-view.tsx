import GraphD3 from "../components/ActorMappingD3Graph";
import InteractivePanel from "src/components/InteractivePanel";
import nodeData from "../data/nodes.json";
import relationData from "../data/relations.json";
import stories from "../data/stories.json";
import * as Styled from "./graph.styles";
import Title from "src/components/Title";
import { PanelBack, Left, Button } from "./index.styles";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  MapsArrow,
  Xmark,
} from "iconoir-react";
import { useState } from "react";

const GraphView = () => {
  const [isOpenCustom, setIsOpenCustom] = useState(false);

  function toggleMakingYourOwn(e) {
    e.preventDefault();
    setIsOpenCustom(!isOpenCustom);
  }

  const data = {
    nodes: nodeData,
    links: relationData,
  };

  return (
    <>
      <PanelBack key="graph">
        <GraphD3 data={data}></GraphD3>
      </PanelBack>
      <Styled.StoryCarrousel key="stories">
        {stories.map((story) => {
          return (
            <Styled.Story key={story.shortTitle}>
              <h1>{story.shortTitle}</h1>
            </Styled.Story>
          );
        })}
      </Styled.StoryCarrousel>
      <Left key="left-panels" style={{ marginTop: "10rem" }}>
        <InteractivePanel key="expl">
          <>
            <h1>Explanation</h1>
            <p>Actor Mapping Oirschot description</p>
          </>
        </InteractivePanel>
        <InteractivePanel key="legend">
          <>
            <h1>Legend</h1>
            <p>Items based on Story</p>
          </>
        </InteractivePanel>
        <InteractivePanel key="info">
          <>
            <h1>InfoPanel</h1>
            <p>description based on story</p>
          </>
        </InteractivePanel>
      </Left>
      <Styled.NavButton key="button-next">
        <div className="bottom-right">
          <Button onClick={(e) => toggleMakingYourOwn(e)}>
            {" "}
            Start your own Actor Mapping{" "}
            <MapsArrow
              color="black"
              width={36}
              height={36}
              style={{ transform: "rotate(90deg)" }}
            />
          </Button>
        </div>
      </Styled.NavButton>
      {isOpenCustom && (
        <Styled.BlurPanel
          key="blurpanel"
          onClick={(e) => toggleMakingYourOwn(e)}
          style={{ cursor: "pointer" }}
        ></Styled.BlurPanel>
      )}
      {isOpenCustom && (
        <Styled.TopPanel key="top-panel">
          <Xmark
            color="black"
            width={36}
            height={36}
            onClick={(e) => toggleMakingYourOwn(e)}
            style={{ cursor: "pointer" }}
          ></Xmark>
          <h1>Get the template</h1>
          <ArrowDownCircle color="black" width={36} height={36} />
          <h1>Make your own network</h1>
          <h1>Import the network</h1>
          <ArrowUpCircle color="black" width={36} height={36} />
          
          <button>Start</button>
        </Styled.TopPanel>
      )}
    </>
  );
};

export default GraphView;
