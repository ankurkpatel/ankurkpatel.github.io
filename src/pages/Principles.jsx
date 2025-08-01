import React from 'react';
import MarkdownDisplay from '../MarkdownDisplay';
import content from '../mdFiles/principles.md?raw'

const Principles = () => {
  return ( <MarkdownDisplay content={content} />);
};

export default Principles