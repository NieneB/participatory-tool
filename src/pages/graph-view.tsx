import GraphD3 from "../components/ActorMappingD3Graph";
import InteractivePanel from "src/components/InteractivePanel";
import nodeData from "../data/nodes.json";
import relationData from "../data/relations.json";
import stories from "../data/stories.json";
import * as Styled from "./graph.styles";
import { PanelBack, Left, Button } from "./index.styles";
import { ArrowDownCircle, MapsArrow, Xmark } from "iconoir-react";
import { useEffect, useState } from "react";
import UploadFile from "src/components/UploadDataSet";

const GraphView = () => {
  const [isOpenCustom, setIsOpenCustom] = useState(false);
  const [infoContent, setInfoContent] = useState("");
  const [dataSet, setDataSet] = useState();

  function toggleMakingYourOwn(e) {
    setIsOpenCustom(!isOpenCustom);
  }
  function setInfo(element) {
    setInfoContent(element);
  }

  function changeDataSet(story) {
    // const nodes =  fetch(story.data[0])
    // .then((response) => {
    //   response.json()
    // })
    // .then((data) => {
    //   console.log(data);
    //   return data
    // })
    // console.log(nodes)
    // const storyData = {
    //   nodes: nodes,
    //   links: fetch(story.data[1]).then((response) => {
    //     return response.json();
    //   }),
    // };
    // console.log(storyData);
    // setDataSet(storyData);
  }

  useEffect(() => {
    const data = {
      nodes: nodeData,
      links: relationData,
    };
    setDataSet(data);
  }, []);

  return (
    <>
      <PanelBack key="graph">
        {dataSet && <GraphD3 inputDataSet={dataSet} setInfo={setInfo}></GraphD3>}
      </PanelBack>
      <Styled.StoryCarrousel key="stories">
        {stories.map((story) => {
          return (
            <Styled.Story
              onClick={() => {
                changeDataSet(story);
              }}
              key={story.shortTitle}
            >
              <h1>{story.shortTitle}</h1>
            </Styled.Story>
          );
        })}
      </Styled.StoryCarrousel>
      <Left key="left-panels">
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
            <h1>
              InfoPanel {infoContent.labels && ": " + infoContent.labels[0]}
            </h1>
            {infoContent.properties &&
              Object.keys(infoContent.properties).map(function (key) {
                return (
                  <div key={key}>
                    <h3 style={{ fontWeight: "bold" }}>{key} :</h3>
                    <p>{infoContent.properties[key]}</p>
                  </div>
                );
              })}
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
            id="top-left"
            color="black"
            width={36}
            height={36}
            onClick={(e) => toggleMakingYourOwn(e)}
            style={{ cursor: "pointer" }}
          ></Xmark>
          <Styled.Step>
            <h1>1. Get the template</h1>
            <a href="/data/nodes.json">Click here to download </a>
            <ArrowDownCircle color="black" width={36} height={36} />
          </Styled.Step>
          <Styled.Step>
            <h1>2. Make your own network</h1>
          </Styled.Step>

          <Styled.Step>
            <h1>3. Import the network</h1>
            <UploadFile
              setDataSet={setDataSet}
              setIsOpenCustom={setIsOpenCustom}
            />
          </Styled.Step>
        </Styled.TopPanel>
      )}
    </>
  );
};

export default GraphView;
