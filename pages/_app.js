import Navbar from '../components/Navbar'
import { getSession, SessionProvider } from "next-auth/react"
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

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  return {
    props: {
      session // protecting HTML elements from flickers but you have to create animation in navbar
    }
  }
}
export default MyApp
