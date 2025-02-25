import styled from "styled-components";

export const BackGround = styled.div`
    position:fixed;
    left:0;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    background-image: url("./img/achtergrond_stippen.svg");
    background-position: bottom right;
    background-size: contain;
    background-repeat: no-repeat;
    /* filter: blur(0.5px);
    -webkit-filter: blur(1px); */
    @media only screen and (width <=600px) {
      background-position: top right;

    }
`

export const EnterButton = styled.div`
  width: auto;

  padding: 1rem 1.5rem;
  border: 1px solid var(--color-purple-main);
  background-color: var(--color-background);
  border-radius: 2px;
  color: var(--color-brown-main);
  cursor: pointer;
  
  display: flex;
  align-items: center;
  gap: 1rem;
   
  h3 {
    font-size: 1.5rem;
    text-decoration: unset;
  }
  `;


export const Buttons = styled.div`
  display: flex;
  align-items: stretch;
  align-content: stretch;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-decoration: none;
  a {    text-decoration: none;
  }
    /* Normal HD screen (mijn comp)*/
  @media only screen and (width <= 1950px) {
    justify-content: space-between;
    gap: 1rem;
  }
  @media only screen and (width <=992px) {
    /* gap: 2rem; */
  }
  /* Small screen */
  @media only screen and (width <=600px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
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


export const InfoContainer = styled.div`
  pointer-events: auto;
`;

