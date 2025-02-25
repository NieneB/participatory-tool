import { ArrowLeft } from "iconoir-react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";


const StyledNavBack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > a { 
    padding: 0.5rem;
    &.second:hover {
      background-color: var(--color-brown-third);
    }
    &.third:hover {
      background-color: var(--color-brown-fourth);
    }
  }
`
const StyledNavLocation = styled.div`
  margin: 0;
  padding: 0.5rem ;
  width: auto;
  height: auto;
  border-radius: 2px;
  box-sizing: border-box;

  display: flex;
  flex-direction:row;
  align-items: center;
  gap: 1rem;

  color : #fff;

  &.second {
    background-color: var(--color-brown-third);
    border: 1px solid var(--color-brown-third);
  }
  &.third {
    background-color: var(--color-brown-fourth);
    border: 1px solid var(--color-brown-fourth);
  }
 
`
const NavBack = () => {
  const navigate = useNavigate();
  const url = window.location.hash;
  return (
    <StyledNavBack>
      <Link className={window.location.hash.split("/").length <= 3 ? 'second' : 'third'} to={'..'} onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}>
        <ArrowLeft></ArrowLeft>
      </Link>
      <StyledNavLocation className={window.location.hash.split("/").length <= 3 ? 'second' : 'third'}><h3>{url}</h3></StyledNavLocation>
    </StyledNavBack>
  );
};

export default NavBack;
