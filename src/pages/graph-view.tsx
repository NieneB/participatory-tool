import GraphD3 from "../components/ActorMappingD3Graph";
import InteractivePanel from "src/components/InteractivePanel";
import nodeData from "../data/nodes2.json";
import relationData from "../data/relations2.json";
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
  const [originalDataSet, setOriginalDataSet] = useState();
  const [positionsOn, setPositionsOn] = useState(false)

  function toggleMakingYourOwn(e) {
    setIsOpenCustom(!isOpenCustom);
  }
  function setInfo(element) {
    setInfoContent(element);
  }

  function changeDataSet(story) {
    console.log("update story data", story);
    if(story.shortTitle === "Positions") {
      setPositionsOn( !positionsOn)
    }
    // if (story.data) {
    //   let storyData = {
    //     nodes: [],
    //     links: [],
    //   };

    //   // TODO fix this data getting
    //   fetch(story.data[0])
    //     .then(async (response) => response.json())
    //     .then((data) => {
    //       storyData.nodes = data;
    //     });

    //   fetch(story.data[1])
    //     .then(async (response) => response.json())
    //     .then((data) => {
    //       storyData.links = data;
    //     });

    //   setDataSet(storyData);
    // }
  }

  useEffect(() => {
    const data = {
      nodes: nodeData,
      links: relationData,
    };
    setOriginalDataSet(data);
  }, []);

  function toLowerCaseKeysAndValues(obj: any): any {
    if (typeof obj !== "object" || obj === null) {
      // If it's not an object, convert it to lowercase if it's a string.
      return typeof obj === "string" ? obj.toLowerCase() : obj;
    }

    if (Array.isArray(obj)) {
      // If it's an array, recursively process each element.
      return obj.map(toLowerCaseKeysAndValues);
    }

    // Process object keys and values >> All but Name!
    return Object.keys(obj).reduce((acc, key) => {
      if (key !== "Name") {
        const lowerCaseKey = key.toLowerCase();
        acc[lowerCaseKey] = toLowerCaseKeysAndValues(obj[key]);
        return acc;
      } else {
        const lowerCaseKey = key.toLowerCase();
        acc[lowerCaseKey] = obj[key];
        return acc;
      }
    }, {} as Record<string, any>);
  }

  useEffect(() => {
    if (originalDataSet) {
      const newObj = toLowerCaseKeysAndValues(originalDataSet);
      setDataSet(newObj);
    }
  }, [originalDataSet]);

  return (
    <>
      <PanelBack key="graph">
        {dataSet && (
          <GraphD3 inputDataSet={dataSet} setInfo={setInfo} positionsOn={positionsOn}></GraphD3>
        )}
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
              setDataSet={setOriginalDataSet}
              setIsOpenCustom={setIsOpenCustom}
            />
          </Styled.Step>
        </Styled.TopPanel>
      )}
    </>
  );
};

export default GraphView;
