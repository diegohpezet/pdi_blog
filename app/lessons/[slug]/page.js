import React from 'react';
import Markdown from 'markdown-to-jsx';
import getFileContent from '@/utils/getFileContent';
import CodeBlock from '@/components/CodeBlock';


export default function Lesson(props) {
  const slug = props.params.slug;

  const content = getFileContent(slug);
  return (
    <article>
      <Markdown 
        options={{
          overrides: {
            pre: CodeBlock
          }
        }}
      >
        {content}
      </Markdown>
    </article>
  );
}