import { NavArrowDown, NavArrowUp } from "iconoir-react";
import { useState } from "react";
import styled from "styled-components";


const StyledCollapsible = styled.div`
    border-bottom: solid var(--color-brown-light) 1px;
    padding: 1rem;
    margin: auto;
    .hover{
        padding: 1rem;
        cursor: pointer;
    &:hover{
        background-color: var(--color-yellow-main);
    }
    }
`
const Collapsible = ({ children }) => {
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
    };

    return (
        <StyledCollapsible>
            {open ? <NavArrowUp className={"hover"} onClick={toggle} /> : <NavArrowDown className={"hover"} onClick={toggle} />}
            {open && (
                <div className="toggle">
                    {children}
                </div>
            )}
        </StyledCollapsible>
    );
};

export default Collapsible;