import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import '../styles/swiper-styles.scss'
import Head from "next/head";
import store from "../redux/store";
import {Provider} from "react-redux";

function MyApp({ Component, pageProps }) {
    return <>
        <Head>
            <link rel="shortcut icon" href={'/favicon.ico'} />
        </Head>
        
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    </>
}

export default MyApp