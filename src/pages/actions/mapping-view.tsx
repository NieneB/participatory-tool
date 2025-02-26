import InteractivePanel from "../../components/InteractiveSidePanel";
import stories from "../content/stories.json";
import * as Styled from "./mapping.styles";
import {
  Xmark
} from "iconoir-react";
import { useState } from "react";
import UploadFile from "../../components/UploadDataSet";
import Legend from "../../components/Legend";
import MappingDataContent from "../../components/MappingDataContent";
import NavBack from "../../components/NavBack";
import CustomActionButton from "../../components/CustomActionButton";
import CustomNavButton from "../../components/CustomNavButton";

const GraphView = () => {
  const [isOpenCustom, setIsOpenCustom] = useState(false);
  const [infoContent, setInfoContent] = useState("");
  const [inputDataSet, setInputDataSet] = useState();
  const [positionsOn, setPositionsOn] = useState(false);
  const [extraCollapse, setExtraCollapse] = useState([]);
  const [activeStory, setActiveStory] = useState("");

  function toggleMakingYourOwn(e) {
    setIsOpenCustom(!isOpenCustom);
  }

  function changeStory(story) {
    setActiveStory(story.shortTitle);
    if (story.shortTitle === "Positions") {
      setExtraCollapse(["legend", true]);
      setPositionsOn(!positionsOn);
    }
  }

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
    <Styled.MainGraphPage>
      <Styled.Header key="stories">
        <NavBack />
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
                <h3>{story.shortTitle}</h3>
              </Styled.Story>
            );
          })}
        </Styled.StoryCarrousel>
      </Styled.Header>
      <Styled.Left key="left-panels">
        <InteractivePanel
          key="expl"
          id="expl"
          extraCollapse={extraCollapse[0] === "expl" && extraCollapse[1]}
          setExtraCollapse={setExtraCollapse}
        >
          <>
            <h2>Explanation {activeStory}</h2>
            {!activeStory && <><p>
              With this tool you can collect and organise the data with the goal to support, visualize and complement the possibilities for participation. Your actor mapping will always be in development, because your data will grow and change over time.
            </p>
              <p>
                You can make, upload and adjust your actor network multiple times. There is no limit to the amount of downloads or uploads. </p>
              {isOpenCustom ? <p>
                You are looking at your own actor mapping.</p> : <p>
                You are looking at the actor mapping this team created for the GO CAWH case study.</p>}</>
            }
            {activeStory && <p>
              {stories.map((story) => {
                return activeStory === story.shortTitle ? story.desc : ""
              })
              }
            </p>
            }
          </>
        </InteractivePanel>
        <InteractivePanel
          key="legend"
          id="legend"
          extraCollapse={extraCollapse[0] === "legend" && extraCollapse[1]}
          setExtraCollapse={setExtraCollapse}
        >
          <>
            <h2>Legend</h2>
            <Legend activeStory={activeStory} />
          </>
        </InteractivePanel>
        <InteractivePanel
          key="info"
          id="info"
          extraCollapse={extraCollapse[0] === "info" && extraCollapse[1]}
          setExtraCollapse={setExtraCollapse}
        >
          {infoContent ? <>
            <h2>
              Clicked Node {infoContent.labels && ": " + infoContent.labels[0]}
            </h2>
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
          </> : <h3>Click on a Node to get more information</h3>}
        </InteractivePanel>
      </Styled.Left>
      <MappingDataContent inputDataSet={inputDataSet} activeStory={activeStory} setInfoContent={setInfoContent} setExtraCollapse={setExtraCollapse}> </MappingDataContent>

      <Styled.NavButton key="button-next" onClick={(e) => toggleMakingYourOwn(e)}>
        <CustomActionButton text="Start your own Actor Mapping"></CustomActionButton>
      </Styled.NavButton>
      {
        isOpenCustom && (
          <Styled.BlurPanel
            key="blurpanel"
            onClick={(e) => toggleMakingYourOwn(e)}
            style={{ cursor: "pointer" }}
          ></Styled.BlurPanel>
        )
      }
      {
        isOpenCustom && (
          <Styled.TopPanel key="top-panel">
            <Xmark
              id="top-left"
              color="#1a1a1a"
              width={36}
              height={36}
              onClick={(e) => toggleMakingYourOwn(e)}
              style={{ cursor: "pointer" }}
            ></Xmark>
            <Styled.Step>
              <h1>Instructions</h1>
              <p>With this tool you can collect and organise the data with the goal to support, visualize and complement the possibilities for participation. Your actor mapping will always be in development, because your data will grow and change over time.
              </p>
              <p>
                You can make, upload and adjust your actor network multiple times. There is no limit to the amount of downloads or uploads.
              </p>
              <p>
                Let’s get started!
              </p>
            </Styled.Step>
            <Styled.Step>
              <h1>Step 1. Collect the data</h1>
              <ol>
                <li>Collect your data using the methods and tools and information from the other representatives</li>
                <li>Organise your data by node, property and value</li>
                <li>If the value is unknown, either leave it empty or pick the ‘unknown’ value</li>
              </ol>
              <div
                onClick={(e) => {
                  saveFile(
                    "https://raw.githubusercontent.com/NieneB/participatory-tool/refs/heads/main/public/data/Nodes-properties-values.pdf"
                  );
                }}
                title="Template actor mapping GO CAWH">
                <CustomActionButton text="Download the list of nodes, properties and values"></CustomActionButton>
              </div>
          
            </Styled.Step>
            <Styled.Step>
              <h1>Step 2. Make your actor network </h1>
              <ol>
                <li>Click below on the button
                  <a href="https://arrows.app/" target="blank">
                    'arrows.app'
                  </a></li>
                <li>Edit the framework in the app, using the exact descriptions of the values listed in the list above</li>
                <li>edit the framework in the app, copy the existing nodes to create
                  new ones</li>
                <li>Done? Save the file as a .json format and then come back to this app!</li>
              </ol>
              <div
                onClick={(e) => {
                  saveFile(
                    "https://raw.githubusercontent.com/NieneB/participatory-tool/refs/heads/main/public/data/template actor mapping GO CAWH.json"
                  );
                }}
                title="Template actor mapping GO CAWH">
                <CustomActionButton text="Download example framework for the Arrows.app"></CustomActionButton>
              </div>
              <CustomNavButton linkTo="https://arrows.app/" text="Go to the Arrows.app" target="blank"></CustomNavButton>
            </Styled.Step>

            <Styled.Step>
              <h1>Step 3. Import your custom netwerk </h1>
              <UploadFile
                setDataSet={setInputDataSet}
                setIsOpenCustom={setIsOpenCustom}
              />
            </Styled.Step>
          </Styled.TopPanel>
        )
      }
    </Styled.MainGraphPage >
  );
};

export default GraphView;
