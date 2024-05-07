import React from 'react';
import Markdown from 'markdown-to-jsx';
import getFileContent from '@/utils/getFileContent';


export default function Lesson(props) {
  const slug = props.params.slug;

  const content = getFileContent(slug);
  return (
    <article>
      <Markdown>{content}</Markdown>
    </article>
  );
}