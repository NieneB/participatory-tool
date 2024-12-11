import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (width <=600px) {
    height: auto;
  }
`;

const StyledTitle = styled.h1`
  background-color: #eaeadd;
  margin: 1.5rem;
  font-size: 2.5rem;
  text-align: center;
  /* Small screen */
  @media only screen and (width <=600px) {
    font-size: 2.5rem;
  }
`;
const Title = () => {
  return (
    <Header>
      <StyledTitle>
        Participatory approach to a complex spatially integrated design process
      </StyledTitle>
    </Header>
  );
};

export default Title;
