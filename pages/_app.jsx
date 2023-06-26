import Head from "next/head"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "@layout/index"
import { Provider } from 'react-redux'
import { wrapper } from "@my-redux/store"
import React from "react"
import ErrorBoundary from "@components/ErrorBoundary"

export default function MyApp({ Component, ...rest }) {
  const {store, props} = wrapper.useWrappedStore(rest)
  const { pageProps } = props
  
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Head>
          <title>Franklin React React with NextJS</title>
        </Head>
        <ChakraProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>        
        </ChakraProvider>
      </ErrorBoundary>
    </Provider>
  )
}
