import styled from "styled-components";

export const BackGround = styled.div`
    position:fixed;
    z-index:-1;
    width: 100vw;
    height: 100vh;
    background-image: url("/img/achtergrond_stippen.svg");
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;
    /* filter: blur(0.5px);
    -webkit-filter: blur(1px); */
  
`
export const Main = styled.div`
  width: 40vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;
  margin: auto;
  
    @media only screen and (width <=1500px) {
    width: 60vw;
  }
  @media only screen and (width <=992px) {
    width: 70vw;
  }
  @media only screen and (width <=600px) {
    overflow-y: auto;
    height: auto;
    width: 80vw;

    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;




export const Nav = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1rem;
  
  @media only screen and (width <=992px) {
  }
  /* Small screen */
  @media only screen and (width <=600px) {
    flex-direction: column;
  }
`;

export const EnterButton = styled.button`
  background-color: rgba(0,0,0,0);
  border: 1px solid var(--color-purple-main);
  border-radius: 2px;
  box-sizing: border-box;
  color: var(--color-brown-main);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
  
    font-size: 1.5rem;
    text-decoration: unset;
  }


  margin: 0;
  outline: none;
  padding: 1rem 1.5rem;
  
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:hover {
  
  }

  
`;


export const Buttons = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  
  @media only screen and (width <=992px) {
    gap: 2rem;

  }
  /* Small screen */
  @media only screen and (width <=600px) {
    flex-direction: column;
    gap: 1rem;

  }
`;

export const Button = styled.button`
  background-color: rgba(0,0,0,0);
  border: 2px solid var(--color-yellow-main);
  border-radius: 2px;
  box-sizing: border-box;
  width: auto;
  color: #000;
  cursor: pointer;

  display: flex;
  flex-direction:column;
  align-items: center;
  gap: 1rem;

  &#pink {
    border: 1px solid var(--color-pink-main);
  }
  &#purple {
    border: 1px solid var(--color-purple-main);
  }
  &#yellow {
    border: 1px solid var(--color-yellow-main);
  }
  h1 {
    text-transform: uppercase;
  }

  margin: 0;
  padding: 1rem 1.5rem;
  
  user-select: none;
  -webkit-user-select: none;

  &:hover {
    /* outline: 5px solid #000;
    outline-offset: 0.3rem;
    border-radius: 0px; */
    background-color: var(--color-yellow-main);
    color: #ffffff;
    border: 0px solid #000;


    &#pink {
    border: 1px solid var(--color-pink-main);
    background-color: var(--color-pink-main);

  }
  &#purple {
    border: 1px solid var(--color-purple-main);
    background-color: var(--color-purple-main);

  }
  &#yellow {
    border: 1px solid var(--color-yellow-main);
    background-color: var(--color-yellow-main);

  }
  }
 
  
`;



// Complete covering screen
export const PanelBack = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(181, 181, 181, 0.2);
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items:center;
  
`;

// On the left
export const Left = styled.div`
  position: absolute;
  display: flex;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  pointer-events: auto;
`;

