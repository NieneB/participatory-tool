import { ArrowLeft } from "iconoir-react";
import * as Styled from "./../pages/index.styles";
import { useNavigate } from "react-router-dom";

const NavBack = () => {
  const navigate = useNavigate();
  console.log(navigate)
  return (
    <Styled.Button onClick={() => navigate(-1)}>
      <ArrowLeft></ArrowLeft>
    </Styled.Button>
  );
};

export default NavBack;
