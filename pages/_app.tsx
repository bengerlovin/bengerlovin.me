import '../styles/global.css';
import { SWRConfig } from 'swr'
import fetcher from 'lib/fetcher'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher: fetcher }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;
