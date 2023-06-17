import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@layout/index"
import { Provider } from 'react-redux'
import { wrapper } from "@my-redux/store"

function MyApp({ Component, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  return (
    <Provider store={store}>
      <Head>
        <title>Chakra UI Dashboard</title>
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>        
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
