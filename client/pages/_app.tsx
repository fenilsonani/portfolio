// @ts-nocheck
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <Layout childern={<Component {...pageProps} />}>
    <Layout childern={<Component {...pageProps} />}>
      {/* <Component {...pageProps} /> */}
    </Layout>

  )
}
