import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Section = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  line-height: 1.5rem;

  & li {
    list-style: circle;
    list-style-position: inside;
  }
`;

const DefaultMarkdownPage = ({ fileInput }) => {
    const { filename } = useParams();
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        if (!filename) return
        console.log(filename)
        fetch(`./methods/${filename}.md`)
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text));
    }, [filename]);

    useEffect(() => {
        if (!fileInput) return
        fetch(`./methods/${fileInput}.md`)
            .then((response) => response.text())
            .then((text) => setMarkdownContent(text));
    }, [fileInput]);

    return (
        <Section>
            <ReactMarkdown
                components={{
                    a(props) {
                        return <HashLink to={`${props.href}`} smooth >{props.children} </HashLink>
                    }
                }}
            >{markdownContent}


            </ReactMarkdown>
        </Section>
    );
};

export default DefaultMarkdownPage;
