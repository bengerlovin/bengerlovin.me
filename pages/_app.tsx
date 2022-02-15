import '../styles/global.css';
import { SWRConfig } from 'swr'
import fetcher from 'lib/fetcher'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SWRConfig value={{ fetcher: fetcher }}>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#fff',
              color: '#141414',
            },
            // Default options for specific types
            success: {
              duration: 3500,
              theme: {
                primary: 'green',
                secondary: 'white',
              },
            },
          }}
        />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}

export default MyApp;
