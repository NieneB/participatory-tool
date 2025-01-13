import styled from "styled-components";

export const StoryCarrousel = styled.div`
    width: 100vw;
    height:100px;
    background-color:  rgba(181, 181, 181, 0.3);
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 1rem;
    /* padding:1rem; */
    position: absolute;
`

export const Story = styled.button`
    padding: 0.5rem;
    &.selected {
        color: red;
    }
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
    width: calc(90vw - 6rem);
    height:calc(90vh - 6rem);
    background-color: rgba(181, 181, 181, 1);
    z-index: 1000;

    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;

    > #top-left {
        position: absolute;
        top:3rem;
        right:3rem;
    }
`

export const Step = styled.div`
    margin-left: 30%;
    margin-bottom: 3rem;
    display:flex;
    flex-direction:column;
    justify-content: start;
    gap: 2rem;
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
