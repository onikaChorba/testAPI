import '@component/styles/globals.scss'
import './../styles/media.scss'
import {Layout} from '../components/Layout'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {store} from '../store/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
 )
}
