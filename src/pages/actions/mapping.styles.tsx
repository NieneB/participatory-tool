import styled from "styled-components";

export const MainGraphPage = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    left:0;
    top:0;
    z-index: 10000000;
    background-color: var( --color-background);

`
export const Header = styled.div`
    width: calc(100vw - 2rem);
    background-color:  rgba(181, 181, 181, 0.3);
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding: 1rem;

    @media only screen and (width <=1500px) {
        height:auto;
        padding: 0.5rem;
        width: 100vw;

    }

    
   
   
`
export const StoryCarrousel = styled.div`
 display: flex;
 gap: 3rem;
 margin-right: 4rem;

    /* Normal HD screen (mijn comp)*/
    @media only screen and (width <=1950px) {

    }

    @media only screen and (width <=1500px) {
        gap: 1rem;
        overflow-x: scroll;
        margin: 0;
        flex-wrap: wrap;
    }


    /* Intermediate screen */
    @media only screen and (width <=992px) {
        gap: 0.5rem;


    }

     /* Small screen */
     @media only screen and (width <=600px) {
        display:none;
    }

`
export const Story = styled.a`
    width: auto;
    text-decoration: none;
    padding: 1rem 1.5rem;
    border: 1px solid var(--color-purple-main);
    border-radius: 2px;
    color: var(--color-brown-main);
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 1rem;
    &.selected {
    background-color: var(--color-pink-main);
        color: white;
    }

    @media only screen and (width <=992px) {
        padding: 1rem ;
    }
`


// On the left
export const Left = styled.div`
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 30vw;
  width: fit-content;
`;

// Start button 
export const NavButton = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  
`;

export const TopPanel = styled.div`
    position:absolute;
    top:5vh;
    right: 5vw;
    width: calc(90vw - 6rem);
    height:calc(90vh - 6rem);
    padding: 3rem;
    overflow-y: scroll;
    background-color: var(--color-brown-light);
    border-radius: 3px;
    color: white;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    gap: 2rem;

    > #top-left {
        position: absolute;
        top:3rem;
        right:3rem;
        color:white;
    }
`

export const Step = styled.div`
    /* width: 50%; */
    display:flex;
    flex-direction:column;
    justify-content: start;
    gap: 0.5rem;
    p,a {
        color:white;
    }
`

export const BlurPanel = styled.div`
    position:absolute;
    top:0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255,255,255,0.8);
    /* filter: blur(3px);
    -webkit-filter: blur(3px); */
    z-index: 1000;
`
