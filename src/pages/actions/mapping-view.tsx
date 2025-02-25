import InteractivePanel from "../../components/InteractiveSidePanel";
import stories from "../../data/stories.json";
import * as Styled from "./mapping.styles";
import { EnterButton } from "../index.styles";
import {
  ArrowDownCircle,
  ArrowRightCircle,
  MapsArrow,
  Xmark,
} from "iconoir-react";
import { useState } from "react";
import UploadFile from "../../components/UploadDataSet";
import Legend from "../../components/Legend";
import MappingDataContent from "../../components/MappingDataContent";
import NavBack from "../../components/NavBack";

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
            <h1>Explanation {activeStory}</h1>
            <p>
              Collecting and organizing the data to identify the possibilities for participation. This actor mapping will always be in development, because your information will change over time. You will upload and adjust your actor network multiple times during this process.
            </p>
            <p>This story, {activeStory ? activeStory : "This"}, shows .. </p>
          </>
        </InteractivePanel>
        <InteractivePanel
          key="legend"
          id="legend"
          extraCollapse={extraCollapse[0] === "legend" && extraCollapse[1]}
          setExtraCollapse={setExtraCollapse}
        >
          <>
            <h1>Legend</h1>
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
            <h1>
              Clicked Node {infoContent.labels && ": " + infoContent.labels[0]}
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
          </> : <h3>Click on a Node to get more information</h3>}
        </InteractivePanel>
      </Styled.Left>
      <MappingDataContent inputDataSet={inputDataSet} activeStory={activeStory} setInfoContent={setInfoContent} setExtraCollapse={setExtraCollapse}> </MappingDataContent>
      <Styled.NavButton key="button-next">
        <EnterButton className="bottom-right" onClick={(e) => toggleMakingYourOwn(e)}>
          <h4> Start your own Actor Mapping </h4>
          <MapsArrow
            color="var(--color-pink-main)"
            width={44}
            height={44}
            style={{ transform: "rotate(90deg)" }}
          />
        </EnterButton>
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
