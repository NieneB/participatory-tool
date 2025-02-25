import { HashLink } from 'react-router-hash-link';

import parse from 'html-react-parser';

const DefaultPageParagraphItem = ({ text }) => {

  function createMarkup(input) {
    return { __html: input };
  }

  return (
    <>
      {/* <span dangerouslySetInnerHTML={ createMarkup(text) } />  */}
       { parse(text, {
        replace ( node, index ){
          if (node.name === "a" && node.type === 'tag') {
            return <HashLink key={index} to={node.attribs.href}> {node.children[0].data} </HashLink>
          } 
        }
      })}
    </>
  );
};

export default DefaultPageParagraphItem;
