import React from 'react';
import MarkdownDisplay from '../MarkdownDisplay';
import content from '../mdFiles/influences.md?raw'

const Influences = () => {
  return ( <MarkdownDisplay content={content} />);
};

export default Influences
