import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel="preconnect"
                    href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@800&family=Inter:wght@300;400;500;700&display=block" rel='stylesheet' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}