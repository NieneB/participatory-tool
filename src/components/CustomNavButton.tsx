import { ArrowRight } from "iconoir-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled.div`
  margin-top: 2rem;
  width: auto;
  cursor: pointer;

  & a {
    text-decoration: none;
  }
  
  :hover{
    background-color: var(--color-pink-main);
    color:white;
    svg { color: white;}
  }
`
const StyledButton = styled.div`
    
  
  padding: 1rem 1.5rem;
  border: 1px solid var(--color-purple-main);
  background-color: var(--color-background);
  border-radius: 2px;
  color: var(--color-brown-main);
  
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;

  `;



const CustomNavButton = ({ linkTo, text, target }) => {
  return (
    <StyledLink>
      <Link to={linkTo} target={target}>
        <StyledButton>
          <h2>{text}</h2>
          <ArrowRight color="var(--color-brown-main)" width={36} height={36} />
        </StyledButton>
      </Link>
    </StyledLink>
  )
}

export default CustomNavButton;