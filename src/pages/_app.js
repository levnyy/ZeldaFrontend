import Layout from '../components/layout/index'
import GlobalContextProvider from '../store'

export default function App({ Component, pageProps }) {
  return (
      <GlobalContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContextProvider>
  )
}
