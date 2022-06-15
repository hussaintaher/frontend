import Navbar from '../components/Navbar'
import { SessionProvider } from "next-auth/react"
import '../styles/globals.css'
import '../styles/Navbar.css'
import {store} from '../store';
import {Provider} from 'react-redux';

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />    
      </Provider>
    </SessionProvider>
  )
}

export default MyApp
