import TopNav from '../components/TopNav';
import styles from '../styles/style.css';
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return(
    <>
    
    <TopNav/>
    <ToastContainer position='top-center'/>
    <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
