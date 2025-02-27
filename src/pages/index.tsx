import * as Styled from "./index.styles";
import { NavLink, } from "react-router-dom";
import {
  ArrowRight,
} from "iconoir-react";
import CustomNavButton from "../components/CustomNavButton";

const Home = () => {
  return (
    <div className={window.location.hash.split("/").length <= 2 ? "center" : "top"}>
      <Styled.BackGround />
      <h1>Participatory approach to a complex spatially integrated design process
      </h1>
      <p> Welcome to the website for the participatory part of GO CAWH. GO CAWH is a Dutch initiative, led by Rijkswaterstaat. The goal of GO CAWH is to connect the institutional (led by Rijks Universiteit Groningen), community (led by Coöperatie Kloostersland) and participatory position (led by Design Academy Eindhoven) in complex spatially design processes.
      </p>
      <p>
        This website is dedicated to the approach from the participatory perspective. The objective for the participatory position is to identify possibilities for participation. On this website you will find a clear explanation of the scope of the process, led by the participatory representative, about the differences and connections between the people involved and a clear description of the tools available.
      </p>


      <p>This website & digital tool is developed for: Design Academy Eindhoven, project GO CAWH, commissioned by RWS</p>
      <p>This website & digital tool is developed by: Anne Vader, Niene Boeijen & Naomi Bueno de Mesquita</p>

      <p >This work is licensed under
        <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{ display: 'inline', }}> CC BY-SA 4.0
          <img style={{ height: "22px", width: "22px", margin: "0 0 0 5px", verticalAlign: "text-bottom" }} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1" alt="" />
          <img style={{ height: "22px", width: "22px", margin: "0 0 0 5px", verticalAlign: "text-bottom" }} src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1" alt="" />
          <img style={{ height: "22px", width: "22px", margin: "0 0 0 5px", verticalAlign: "text-bottom" }} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1" alt="" />
        </a>
      </p>
      <p><a href='https://github.com/NieneB/participatory-tool'>Github repository</a></p>
      <CustomNavButton linkTo="approach" text="enter" />
    </div>
  );
};

export default Home;
