import HydrationWrapper from "@/hydrationWrapper";
import Head from "next/head";
import '@/styles/globals.css';


export default function App({ Component, pageProps }) {

  

  return (
    <>
    <Head>HR Website</Head>
    <HydrationWrapper>
    <Component {...pageProps} />  
    </HydrationWrapper>
    
    </>
  );
}

