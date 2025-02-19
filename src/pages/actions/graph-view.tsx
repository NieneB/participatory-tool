import GraphD3 from "../../components/ActorMappingD3Graph_v2";
import InteractivePanel from "src/components/InteractivePanel";
import nodeData from "../../data/nodes2.json";
import relationData from "../../data/relations2.json";
import stories from "../../data/stories.json";
import * as Styled from "./graph.styles";
import { PanelBack, Left, Button } from "../index.styles";
import {
  ArrowDownCircle,
  ArrowRightCircle,
  MapsArrow,
  Xmark,
} from "iconoir-react";
import { useEffect, useState } from "react";
import UploadFile from "src/components/UploadDataSet";
import NavBack from "src/components/NavBack";
import { SimulationNodeDatum } from "d3";
import LegendD3 from "src/components/Legend";
import legendData from "../../data/legend_places.json";

const GraphView = () => {
  const [isOpenCustom, setIsOpenCustom] = useState(false);
  const [infoContent, setInfoContent] = useState("");
  const [originalDataSet, setOriginalDataSet] = useState();
  const [dataSet, setDataSet] = useState();

  const [positionsOn, setPositionsOn] = useState(false);
  const [extraCollapse, setExtraCollapse] = useState([]);
  const [activeStory, setActiveStory] = useState("");
  function toggleMakingYourOwn(e) {
    setIsOpenCustom(!isOpenCustom);
  }
  function setInfo(element) {
    setExtraCollapse(["info", element ? true : false]);
    setInfoContent(element);
  }

  function changeStory(story) {
    setActiveStory(story.shortTitle);
    if (story.shortTitle === "Positions") {
      setExtraCollapse(["legend", true]);
      setPositionsOn(!positionsOn);
    }
  }

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
    const data = {
      nodes: nodeData,
      links: relationData,
    };
    setOriginalDataSet(data);
  }, []);

  useEffect(() => {
    if (originalDataSet) {
      const newObj = toLowerCaseKeysAndValues(originalDataSet);
      if (newObj) {
        console.log("change dataset in Graph");

        interface CustomNode extends SimulationNodeDatum {
          id: string;
          name: string;
        }

        let newData = {
          links: [],
          nodes: [],
        };
        if (newObj.nodes.length && newObj.nodes[0].n) {
          newObj.links.map((element) => {
            element.source = element.p.start.elementid;
            element.target = element.p.end.elementid;
            element.value = 1;
            element.strength = 2;
          });
          newData.links = newObj.links;
          const initNodes: CustomNode[] = [
            newObj.nodes.map((d) => {
              d.n.id = d.n.elementid;
              d.n.label = d.n.labels[0];
              d.n.properties.connections = newObj.links.reduce((acc, l) => {
                if (l.source === d.n.id || l.target === d.n.id) {
                  acc = acc + 1;
                }
                return acc;
              }, 0);
              return newData.nodes.push(d.n);
            }),
          ];
        } else if (newObj.nodes.length) {
          newObj.nodes.map((element) => {
            element.label = element.labels[0];
          });

          newData.nodes = newObj.nodes;

          newObj.relationships.map((element) => {
            element.source = element.fromid;
            element.target = element.toid;
            element.value = 1;
            element.strength = 2;
          });
          newData.links = newObj.relationships;
        } else {
          return;
        }
        setDataSet(newData);
      }
    }
  }, [originalDataSet]);


  const saveFile = async (fileUrl) => {
    try {
      // Fetch the content from the URL
      const response = await fetch(fileUrl);
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }
  
      // Extract the content as a Blob
      const blob = await response.blob();
  
      // Derive a default filename from the URL
      const fileName = fileUrl.split('/').pop() || "download.txt";
  
      // Create a link element for downloading the file
      const a = document.createElement("a");
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName; // Set the file name
  
      // Trigger a click event on the link to initiate the download
      a.click();
  
      // Cleanup: release the URL object
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error saving the file:", error);
    }
  };

  return (
    <>
      <PanelBack key="graph">
        {dataSet && (
          <GraphD3
            graphData={dataSet}
            setInfo={setInfo}
            activeStory={activeStory}
          ></GraphD3>
        )}
      </PanelBack>
      <Styled.StoryCarrousel key="stories">
        {stories.map((story) => {
          return (
            <Styled.Story
              onClick={(e) => {
                changeStory(story);
              }}
              key={story.shortTitle}
              className={activeStory === story.shortTitle ? "selected" : ""}
            >
              <h1>{story.shortTitle}</h1>
            </Styled.Story>
          );
        })}
      </Styled.StoryCarrousel>
      <Left key="left-panels">
        <div>
          <InteractivePanel
            key="expl"
            id="expl"
            extraCollapse={extraCollapse[0] === "expl" && extraCollapse[1]}
            setExtraCollapse={setExtraCollapse}
          >
            <>
              <h1>Explanation {activeStory}</h1>
              <p>{activeStory ? activeStory : "This"} shows .. </p>
            </>
          </InteractivePanel>
        </div>
        <InteractivePanel
          key="legend"
          id="legend"
          extraCollapse={extraCollapse[0] === "legend" && extraCollapse[1]}
          setExtraCollapse={setExtraCollapse}
        >
          <>
            <h1>Legend</h1>
            <p>Items based on Story</p>
            <LegendD3 data={legendData} activeStory={activeStory} />
          </>
        </InteractivePanel>
        <InteractivePanel
          key="info"
          id="info"
          extraCollapse={extraCollapse[0] === "info" && extraCollapse[1]}
          setExtraCollapse={setExtraCollapse}
        >
          <>
            <h1>
              InfoPanel {infoContent.labels && ": " + infoContent.labels[0]}
            </h1>
            <table>
              {infoContent.properties &&
                Object.keys(infoContent.properties).map(function (key) {
                  return (
                    <tr key={key}>
                      <td>
                        <h3 style={{ fontWeight: "bold" }}>{key}</h3>
                      </td>
                      <td style={{ paddingLeft: "1rem" }}>
                        <p>{infoContent.properties[key]}</p>
                      </td>
                    </tr>
                  );
                })}
            </table>
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
            <a
              onClick={(e) => {
                saveFile(
                  "https://raw.githubusercontent.com/NieneB/participatory-tool/refs/heads/main/public/data/framework.json"
                );
              }}
              // href="https://raw.githubusercontent.com/NieneB/participatory-tool/refs/heads/main/public/data/framework.json"
              title="framework for arrows app"
              // download
              // target="blank"
            >
              Click here to download the template{" "}
              <ArrowDownCircle color="black" width={36} height={36} />
            </a>
          </Styled.Step>
          <Styled.Step>
            <h1>2. Make your own network</h1>
            <p>
              {" "}
              <ArrowRightCircle color="black" width={36} height={36} />
              Go to{" "}
              <a href="https://arrows.app/" target="blank">
                {" "}
                arrows.app{" "}
              </a>{" "}
            </p>
            <p>And import the framework.json file </p>
            <p>
              edit the framework in the app, copy the existing nodes to create
              new ones
            </p>
            <p>
              Done? Save the file as a .json format and then come back to this
              app
            </p>
          </Styled.Step>

          <Styled.Step>
            <h1>3. Import your custom network here</h1>
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
