import '../styles/globals.css'
// import styles from './styles/homeComponent1.module.scss'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return <>
    <div className="containerr">
      <Navbar />
      <div className='body'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </>

}

export default MyApp
