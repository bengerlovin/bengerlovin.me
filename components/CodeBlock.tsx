import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import ally from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light';

// SyntaxHighlighter.registerLanguage('typescript', ts);

const CodeBlock = ({ codeString, language }: { codeString: string; language?: string }) => {
    return (
        <SyntaxHighlighter className="rounded-lg shadow-soft-small" language="typescript" style={ally} wrapLines={true} >
            {codeString}
        </SyntaxHighlighter>
    )
}

export default CodeBlock
