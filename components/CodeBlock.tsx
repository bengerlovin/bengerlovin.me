import { useEffect } from 'react';
const CodeBlock = ({ codeString, language }: { codeString: string; language?: string }) => {


    return (
        <pre className="language-typescript">
            <code className="language-javascript">
                {codeString}
            </code>
        </pre>
    )
}

export default CodeBlock
