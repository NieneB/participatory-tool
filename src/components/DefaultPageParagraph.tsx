import styled from "styled-components";
import { useEffect } from "react";
import { HashLink } from 'react-router-hash-link';
import Collapsible from "./Collapsible";

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
  & p  {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin-top: 0.5rem;
  }
`

const DefaultPageParagraph = ({ element }) => {
  // Setting id as # in url 

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        console.log(sectionTop, section.offsetHeight, "", section, scrollPosition);
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          window.history.replaceState(null, null, `#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  }, [])

  // Filling element with innerHTML 
  useEffect(() => {
    if (element) {
      //find all elements with more info and onclick element fill panel content
      // Dataset
      // setPanelContent("hello");
      // los componenet van maken!! voor elke paneel content! 

      // {element.phase && <HashLink smooth to={`/scope/phases/#${element.phase.replace(/\s+/g, '-').toLowerCase()}`}>{element.phase}</HashLink>}

      console.log(element.objective)
      //  document.getElementById("objective").innerHTML = element.objective;
    }
  }, [element]);

  return (
    <Element key={element.title} id={element.title.replace(/\s+/g, '-').toLowerCase()}>
      <ElementHeader key={'li' + element.title}>
        <h1>{element.title}</h1>
        {element.subtitle && <h3>{element.subtitle}</h3>}
      </ElementHeader>
      <ElementContent>
        <Collapsible titel={element.title}>
          {element.desc && <p>{element.desc}</p>}
          {element.audience && <p><b>audience:</b> {element.audience}</p>}
          {element.mapping && <p><b>Connection to Mapping Approach:</b> {element.mapping}</p>}
          {element.methods && <p><b>Connection to Methods:</b> {element.methods}</p>}
          {element.goal && <p><b>Goal:</b> {element.goal}</p>}
          {element.assignment && <p><b>Assignment:</b> {element.assignment}</p>}
          {element.using && <p><b>By using:</b>
            <ul>
              {element.using.map((el) => {
                return (<li key={el}>{el}</li>)
              })}
            </ul>
          </p>
          }
          {element.output && <p><b>Output:</b> {element.output}</p>}
          {element.iteration && <p><b>Iteration:</b> {element.iteration}</p>}
          {element.role && <p><b>Role:</b> {element.role}</p>}
          {element.objective && <p><b>Objective:</b> <span id="objective" ></span></p>}
          {element.links && <p><b>Link:</b> {element.links}</p>}
        </Collapsible>
      </ElementContent>
    </Element>
  );
};

export default DefaultPageParagraph;
