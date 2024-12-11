// import * as Styled from "../app.styles";
import GraphD3 from "../components/ActorMappingD3Graph";
import InteractivePanel from "src/components/InteractivePanel";
import nodeData from "../data/nodes.json";
import relationData from "../data/relations.json";
import stories from "../data/stories.json";
import * as Styled from "./graph.styles";
import Title from "src/components/Title";
import { PanelBack, Left } from "./index.styles";

const GraphView = () => {
  const data = {
    nodes: nodeData,
    links: relationData,
  };

  return (
    <>
      <PanelBack>
        <GraphD3 data={data}></GraphD3>
      </PanelBack>
      <Styled.StoryCarrousel>
        <p> back </p>
        {stories.map((story) => {
          console.log(story.shortTitle);
          return (
            <Styled.Story>
              <h1>{story.shortTitle}</h1>
            </Styled.Story>
          );
        })}
        <p> forward </p>
      </Styled.StoryCarrousel>
      <Left style={{marginTop:"10rem"}}>
        <InteractivePanel>
          <>
            <Title></Title>
            <p>Actor Mapping Oirschot description</p>
          </>
        </InteractivePanel>
        <InteractivePanel>
          <>
            <h1>Legend</h1>
            <p>Items based on Story</p>
          </>
        </InteractivePanel>
        <InteractivePanel>
          <>
            <h1>InfoPanel</h1>
            <p>description based on story</p>
          </>
        </InteractivePanel>
      </Left>
    </>
  );
};

export default GraphView;
