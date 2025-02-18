import * as Styled from "./index.styles";
import { Link } from "react-router-dom";
import {
  ArrowRight,
} from "iconoir-react";

const Home = () => {
  return (
    <>
      <Styled.BackGround/>
      <Styled.Main>
        <h1>Participatory approach to a complex spatially integrated design process
        </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.:</p>
        <div>
          <p>This tool is develop for: Design Academy Eindhoven</p>
          <p>This tool is develop by: Anne Vader, Niene Boeijen & Naomi Bueno de Mesquita</p>
          <p>License : CC-by</p>
          <p>Github repository: github.com/nieneb/participatory-tool</p>
        </div>
        <Link to="/index2">
          <Styled.EnterButton>
            <div>
              <h3>enter </h3>
            </div>
            <ArrowRight color="var(--color-brown-main)" width={36} height={36} />
          </Styled.EnterButton>
        </Link>
      </Styled.Main>
    </>
  );
};

export default Home;
