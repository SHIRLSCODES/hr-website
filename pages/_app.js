import Contact from '@/components/Contact';
import Discover from '@/components/Discover';
import Explore from '@/components/Explore';
import ExploreDetails from '@/components/ExploreDetails';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Inspire from '@/components/Inspire';
import Keys from '@/components/Keys';
import Navbar from '@/components/Navbar'
import News from '@/components/News';
import WhoWeAre from '@/components/WhoWeAre';
import '@/styles/globals.css';


export default function App({ Component, pageProps }) {

  

  return (
    <>
    <Navbar />
    <Hero />
    <Discover />
    <WhoWeAre />
    <Explore />
    <ExploreDetails />
    <Inspire />
    <News />
    <Keys />
    <Contact />
    <Footer />
    <Component {...pageProps} />
    </>
  );
}

