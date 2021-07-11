import '../styles/globals.scss'
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#000"
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
    )
}

export default MyApp
