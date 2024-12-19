import * as Styled from "./index.styles";
import { Link, useNavigate } from "react-router-dom";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRightSquare, MapsArrow } from "iconoir-react";
import Title from "src/components/Title";

const Home = () => {
  const navigate = useNavigate()
  return (
    <Styled.Main>
      <button onClick={()=> navigate(-1)}><ArrowLeft></ArrowLeft></button>

      <div className="bg-image"></div>
      <h1>WELCOME</h1>
      <Title />
      <h2> Follow one of our 3 paths :</h2>
      <Styled.Buttons>
        <Link to="/journeys">
          {" "}
          <Styled.Button>
            <div>
              <h3>Journeys</h3>
            </div>

            <ArrowLeft color="black" width={36} height={36} />
          </Styled.Button>
        </Link>
        <Link to="/positions">
          <Styled.Button>
            <div>
              <h3>Positions</h3>
            </div>

            <ArrowDown color="black" width={36} height={36} />
          </Styled.Button>
          
        </Link>
        <Link to="/actions">
          <Styled.Button>
            <div>
              <h3>Actions</h3>
            </div>
            <ArrowRight
              color="black"
              width={36}
              height={36}
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
