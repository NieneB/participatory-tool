import { NavArrowDown, NavArrowUp } from "iconoir-react";
import { useState } from "react";
import styled from "styled-components";


const StyledCollapsible = styled.div`
   
   border-bottom: solid var(--color-brown-light) 1px;
   .toggle{
    margin-bottom: 3rem;
   }
    `
const Arrow = styled.div`
     display:flex;
     justify-items:center;
     align-items: center;
     gap: 1rem;
     cursor: pointer;
    /* margin-left: -10px; */
    margin-top:2rem;
    margin-bottom: 2rem;
     &:hover{
        background-color: var(--color-brown-fourth);
        color: white;
    }
    &.open{
        background-color: var(--color-brown-fourth);
        color: white;
    }
`
const Collapsible = ({ titel, children }) => {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
    };

    return (
        <StyledCollapsible>
            <Arrow onClick={toggle} className={open? "open" : ""}>
                {open ? <NavArrowUp width={'3rem'} height={'3rem'} className={"hover"}  /> : <NavArrowDown width={'3rem'} height={'3rem'} className={"hover"}  />}
                {open && <h3>{titel}</h3>}
            </Arrow>
            {open && (
                <div className="toggle">
                    {children}
                </div>
            )}
        </StyledCollapsible>
    );
};

export default Collapsible;