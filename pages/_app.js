/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from 'react-redux'
import { store } from '../store/store'

import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
