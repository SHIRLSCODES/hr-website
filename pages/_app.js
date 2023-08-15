import HydrationWrapper from "@/hydrationWrapper";
import Head from "next/head";
import '@/styles/globals.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useEffect } from "react";


export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
    <Head>HR Website</Head>
    <HydrationWrapper>
    <Component {...pageProps} />  
    </HydrationWrapper>
    
    </>
  );
}

