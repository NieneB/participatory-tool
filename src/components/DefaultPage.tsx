import styled from "styled-components";
import InteractivePanel from "./InteractivePanel";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home } from "iconoir-react";
import { useEffect, useState } from "react";

const DefaultPage = ({ title, dataset }) => {
  const navigate = useNavigate();
  const [panelContent, setPanelContent] = useState("");

  useEffect(() => {
    //find all elements with more info and onclick element fill panel content
    // Dataset
    setPanelContent("hello");
  }, []);

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <ArrowLeft></ArrowLeft>
      </button>
      <button onClick={() => navigate("/")}>
        <Home></Home>
      </button>
      <h1>{title}</h1>
      <InteractivePanel><>{panelContent}</></InteractivePanel>
    </div>
  );
};

export default DefaultPage;
