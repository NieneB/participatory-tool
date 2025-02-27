import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from 'react-router';
import Collapsible from "./Collapsible";
import DefaultPageParagraphItem from "./DefaultPageParagraphItem";

const Element = styled.section`
  /* padding: 3rem; */
  width: 100%;
  margin-bottom: 2rem;
`;

const ElementHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
`

const ElementContent = styled.div`
 grid-row: 2;
 grid-column: 1 / span 2;
 line-height: 1.5rem;
 & ul {
    list-style: circle;
    list-style-position: inside;
  }

  & p >b {
    text-transform: capitalize;
    font-weight: bold;
  }
  & .gridded-p  {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: 0.5rem;
  }
`

const DefaultPageParagraph = ({ element, active }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (active) {
      console.log('#' + element.title.replace(/\s+/g, '-').toLowerCase(), active)
      if ('#' + element.title.replace(/\s+/g, '-').toLowerCase() === active) {
        setOpen(true)
        console.log("open thisone", active)
      } else { setOpen(false) }
    }
  }
    , [active])

  // useEffect(() => {
  //   let hash = window.location.hash
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll('section[id]');
  //     const scrollPosition = window.scrollY;

  //     sections.forEach(section => {
  //       const sectionTop = section.offsetTop;
  //       // console.log(sectionTop, section.offsetHeight, "", section, scrollPosition);
  //       const sectionBottom = sectionTop + section.offsetHeight;

  //       if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
  //         // console.log(section)
  //         // window.history.replaceState(null, null, `${hash}#${section.id}`);
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [])


  return (
    <Element key={element.title} id={element.title.replace(/\s+/g, '-').toLowerCase()}>
      <ElementHeader key={'li' + element.title}>
        <h1>{element.title}</h1>
        {element.subtitle && <h3>{element.subtitle}</h3>}
        {element.desc && <p>{element.desc}</p>}
        {element.description && <p>{element.description}</p>}
      </ElementHeader>
      <ElementContent>
        <Collapsible open={open} setOpen={setOpen} titel={element.title}>

          {element.phase && <div className="gridded-p"><p><b>Connection to Phase:</b> </p><p><DefaultPageParagraphItem text={element.phase}></DefaultPageParagraphItem></p></div>}
          {element.approach && <div className="gridded-p"><p><b>Connection to Approach:</b> </p><p><DefaultPageParagraphItem text={element.approach}></DefaultPageParagraphItem></p></div>}
          {element.methods && <div className="gridded-p"><p><b>Connection to Methods & Tools:</b> </p><p><DefaultPageParagraphItem text={element.methods}></DefaultPageParagraphItem></p></div>}
          {element.mapping && <div className="gridded-p"><p><b>Connection to Mapping Approach:</b> </p><p><DefaultPageParagraphItem text={element.mapping}></DefaultPageParagraphItem></p></div>}
          {element.activation && <div className="gridded-p"><p><b>Connection to Activation:</b> </p><p><DefaultPageParagraphItem text={element.activation}></DefaultPageParagraphItem></p></div>}

          {element.objective && <div className="gridded-p"><p><b>objective:</b> </p><p><DefaultPageParagraphItem text={element.objective}></DefaultPageParagraphItem></p></div>}
          {element.goal && <div className="gridded-p"><p><b>objective:</b> </p><p><DefaultPageParagraphItem text={element.goal}></DefaultPageParagraphItem></p></div>}
          {element.audience && <div className="gridded-p"><p><b>audience:</b> </p><p><Link to="/approach/scope/representative"><DefaultPageParagraphItem text={element.audience}></DefaultPageParagraphItem></Link></p></div>}
          {element.participants && <div className="gridded-p"><p><b>participants:</b> </p><p><Link to="/approach/scope/representative"><DefaultPageParagraphItem text={element.participants}></DefaultPageParagraphItem></Link></p></div>}

          {element.organisation && <div className="gridded-p"><p><b>Organisation:</b> </p><p><DefaultPageParagraphItem text={element.organisation}></DefaultPageParagraphItem></p></div>}

          {element.assignment && <div className="gridded-p"><p><b>Assignment:</b> </p><p><DefaultPageParagraphItem text={element.assignment}></DefaultPageParagraphItem></p></div>}
          {element.output && <div className="gridded-p"><p><b>Output:</b> </p><p><DefaultPageParagraphItem text={element.output}></DefaultPageParagraphItem></p></div>}
          {element.iteration && <div className="gridded-p"><p><b>Iteration:</b> </p><p><DefaultPageParagraphItem text={element.iteration}></DefaultPageParagraphItem></p></div>}
          {element.role && <div className="gridded-p"><p><b>Role:</b> </p><p><DefaultPageParagraphItem text={element.role}></DefaultPageParagraphItem></p></div>}
          {element.background && <div className="gridded-p"><p><b>Preferred background:</b> </p><p><DefaultPageParagraphItem text={element.background}></DefaultPageParagraphItem></p></div>}
          {element.links && <div className="gridded-p"><p><b>Link:</b> </p><p><DefaultPageParagraphItem text={element.links}></DefaultPageParagraphItem></p></div>}

          {element.list && <ul>
            {element.list.map((element) => {
              return <li>{element}</li>
            })}
          </ul>}
        </Collapsible>
      </ElementContent>
    </Element>
  );
};

export default DefaultPageParagraph;
