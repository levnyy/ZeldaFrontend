import Layout from '../components/layout/index'
import GlobalContextProvider from '../store'
import styles from '../styles/globals.css'

//jan smash
export default function App({ Component, pageProps }) {
  return (
      <div>
          <GlobalContextProvider>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </GlobalContextProvider>
      </div>

  )
}
