import Header from '../components/header'
import '../styles/globals.css'
import {store} from '../store';
import {Provider} from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />    
    </Provider>
  )
}

export default MyApp
