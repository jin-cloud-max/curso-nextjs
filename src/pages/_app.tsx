import GlobalStyele from '../styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyele />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
