import styled from "styled-components";

export const Main = styled.div`
  width: 50vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: auto;

  /* >.bg-image {
    position:absolute;
    z-index:-1;
    width: 100vw;
    height: 100vh;
    background-image: url("./img/herdgang.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(3px);
    -webkit-filter: blur(3px);
  } */
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

export const Buttons = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-left: 1rem;
  margin-right: 1rem;
  @media only screen and (width <=992px) {
  }
  /* Small screen */
  @media only screen and (width <=600px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: #ffffff;
  border: 1px solid #000;
  border-radius: 2px;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    font-weight: 800;
    line-height: 1.1rem;
    font-size: 1.1rem;
  }
   p {
    font-size: 0.8rem;
    text-decoration: none;
  }

  margin: 0;
  outline: none;
  padding: 3rem 1.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;
  transition: box-shadow 0.2s, -ms-transform 0.1s, -webkit-transform 0.1s,
    transform 0.1s;
  user-select: none;
  -webkit-user-select: none;
  width: auto;

  &:hover {
    outline: 5px solid #000;
    outline-offset: 0.3rem;
    border-radius: 0px;
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

