import * as Styled from "./index.styles";
import {  Link } from "react-router-dom";
import {  ArrowUpRightSquare, MapsArrow } from "iconoir-react";
import Title from "src/components/Title";

const Home = () => {
  return (
    <Styled.Main>
      <div className="bg-image"></div>
      <h1>WELCOME</h1>
     <Title/>
      <h2> Go to one of our 3 options :</h2>
      <Styled.Buttons>
        <a href="" target="blank">
          <Styled.Button>
            Workshop Materials
            <ArrowUpRightSquare color="black" width={36} height={36} />
          </Styled.Button>
        </a>{" "}
        <a href="" target="blank">
          <Styled.Button>
            Roadmap & Methods
            <ArrowUpRightSquare color="black" width={36} height={36} />
          </Styled.Button>
        </a>{" "}
        <Link to="/info">
          <Styled.Button>
            Actor Mapping Tool
            <MapsArrow
              color="black"
              width={36}
              height={36}
              style={{ transform: "rotate(90deg)" }}
            />
          </Styled.Button>
        </Link>
      </Styled.Buttons>
      <div>
        <h5>This tool is develop for:</h5>
        <h5>This tool is develop by:</h5>
        <h5>License</h5>
        <h5>Github repository</h5>
      </div>
    </Styled.Main>
  );
};

export default Home;
