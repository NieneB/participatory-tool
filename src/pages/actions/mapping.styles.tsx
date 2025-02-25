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
    width: calc(100vw - 1rem);
    height:100px;
    background-color:  rgba(181, 181, 181, 0.3);
    display:flex;
    justify-content: space-between;
    align-items:center;
    padding-left: 1rem;
   
`
export const StoryCarrousel = styled.div`
 display: flex;
 gap: 3rem;
 margin-right: 4rem;

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
export const NavButton = styled.a`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  text-decoration: none;
  :hover{color: white;}
  :hover > svg {color:white;}
`;

export const TopPanel = styled.div`
    position:absolute;
    top:5vh;
    right: 5vw;
    width: calc(90vw - 6rem);
    height:calc(90vh - 6rem);
    padding: 3rem;
    
    background-color: var(--color-brown-light);
    color: white;
    z-index: 1000;

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
    gap: 3rem;

    > #top-left {
        position: absolute;
        top:3rem;
        right:3rem;
        color:white;
    }
`

export const Step = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: start;
    p,a, svg {
        color:white;
    }
    /* gap: 2rem; */
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
