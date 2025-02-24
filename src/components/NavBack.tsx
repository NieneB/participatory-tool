import { ArrowLeft } from "iconoir-react";
import { Link, useNavigate } from "react-router-dom";
import CenterPanelSolid from "./CenterPanelSolid";
import styled from "styled-components";


const StyledNavBack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const NavBack = () => {
  const navigate = useNavigate();
  const url = window.location.pathname;
  console.log(window.location)
  return (
    <StyledNavBack>
      <Link to={'..'} onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}>
        <ArrowLeft></ArrowLeft>
      </Link>
      <CenterPanelSolid title={url} color="pink"><p>{url}</p></CenterPanelSolid>
    </StyledNavBack>
  );
};

export default NavBack;
