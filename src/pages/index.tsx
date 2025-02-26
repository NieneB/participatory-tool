import * as Styled from "./index.styles";
import { NavLink, } from "react-router-dom";
import {
  ArrowRight,
} from "iconoir-react";
import CustomNavButton from "../components/CustomNavButton";

const Home = () => {
  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" :"top" }>
      <Styled.BackGround />
      <h1>Participatory approach to a complex spatially integrated design process
      </h1>
      <h1>Welcome</h1>
      <p> Welcome to the website for the participatory part of GO CAWH. GO CAWH is a Dutch initiative, led by Rijkswaterstaat. The goal of GO CAWH is to connect the institutional (led by Rijks Universiteit Groningen), community (led by Coöperatie Kloostersland) and participatory position (led by Design Academy Eindhoven) in water focussed innovation projects.
      </p>
      <p>
        This website is dedicated to the approach from the participatory perspective.
      </p>
      <p>
        On this website you will find a clear explanation of the scope of the process, led by the participatory process, the differences and connections between the participatory, institutional and community position and the tools to use in action.
      </p>
      <div>
        <p>This tool is develop for: Design Academy Eindhoven</p>
        <p>This tool is develop by: Anne Vader, Niene Boeijen & Naomi Bueno de Mesquita</p>
        <p>License : CC-by</p>
        <p>Github repository: github.com/nieneb/participatory-tool</p>
      </div>
      <CustomNavButton linkTo="approach" text="enter"/>
    </div>
  );
};

export default Home;
