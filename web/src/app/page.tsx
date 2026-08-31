import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import RealOutput from "@/components/RealOutput";
import UnderTheHood from "@/components/UnderTheHood";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import RequestSection from "@/components/RequestSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <WhoItsFor />
        <RealOutput />
        <UnderTheHood />
        <Pricing />
        <Faq />
        <RequestSection />
      </main>
      <Footer />
    </>
  );
}
