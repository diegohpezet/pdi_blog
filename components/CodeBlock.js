import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

export default function CodeBlock({ children }) {
  const { className, children: content } = children.props

  return (
    <SyntaxHighlighter language={className?.match(/-(.*)/)[1]}>
      {content}
    </SyntaxHighlighter>
  )
}
