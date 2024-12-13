import styled from "styled-components";

export const StoryCarrousel = styled.div`
    width: 100vw;
    height:100px;
    background-color:  rgba(181, 181, 181, 0.3);
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 1rem;
    padding:1rem;
    position: absolute;
`

export const Story = styled.button`
    padding: 0.5rem;
`

export const NavButton = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;


export const TopPanel = styled.div`
    position:absolute;
    top:5vh;
    right: 5vw;
    width: 90vw;
    height: 90vh;
    background-color: rgba(181, 181, 181, 1);
    z-index: 1000;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
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