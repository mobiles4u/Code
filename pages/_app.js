import '../styles/globals.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
  <Navbar/>
  <div className='body'>
  <Component {...pageProps} />
  </div>
  <Footer/>
  </>
}

export default MyApp
