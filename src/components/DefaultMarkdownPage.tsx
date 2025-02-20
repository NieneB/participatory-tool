import styled from "styled-components";
import { useEffect, useState } from "react";
import * as Styled from "./../pages/index.styles";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

const Section = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  line-height: 1.5rem;

  & li {
    list-style: circle;
    list-style-position: inside;
  }
`;

const DefaultMarkdownPage = () => {
    const { filename } = useParams();
    const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(`./methods/${filename}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filename]);

  return (
    <>
     
      <Styled.Main>
        <Section>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </Section>
      </Styled.Main>
    </>
  );
};

export default DefaultMarkdownPage;
