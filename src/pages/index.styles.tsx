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

export const EnterButton = styled.button`
   
   width: auto;
  background-color: rgba(0,0,0,0);
  border: 1px solid var(--color-purple-main);
  border-radius: 2px;
  box-sizing: border-box;
  color: var(--color-brown-main);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  outline: none;
  padding: 1rem 1.5rem;

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

// export const Button = styled.button`
//   width: auto;
//   height: 300px;
//   background-color: rgba(0,0,0,0);
//   border: 2px solid var(--color-yellow-main);
//   border-radius: 2px;
//   box-sizing: border-box;
//   color: #000;
//   cursor: pointer;
//   display: flex;
//   flex-direction:column;
//   align-items: center;
//   gap: 1rem;
//   margin: 0;

//   user-select: none;
//   -webkit-user-select: none;

//   &#pink {
//     border: 1px solid var(--color-pink-main);
//   }
//   &#purple {
//     border: 1px solid var(--color-purple-main);
//   }
//   &#yellow {
//     border: 1px solid var(--color-yellow-main);
//   }
//   h1 {
//     text-transform: uppercase;
//   }

//   &:hover {
//     background-color: var(--color-yellow-main);
//     color: #ffffff;
//     border: 0px solid #000;
//     &#pink {
//     border: 1px solid var(--color-pink-main);
//     background-color: var(--color-pink-main);
//     }
//     &#purple {
//       border: 1px solid var(--color-purple-main);
//       background-color: var(--color-purple-main);
//     }
//     &#yellow {
//       border: 1px solid var(--color-yellow-main);
//       background-color: var(--color-yellow-main);
//     }
//   }


// `;



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

