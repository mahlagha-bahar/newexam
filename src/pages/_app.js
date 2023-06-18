
import Footer from '@/components/footer/Footer'
import Menue from '@/components/header/Menue'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Menue />
    <Component {...pageProps} />
    <Footer />
    </>
  )
  
}
