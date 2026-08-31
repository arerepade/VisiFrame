import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhoItsFor from "@/components/WhoItsFor";
import RealOutput from "@/components/RealOutput";
import PreviewDemo from "@/components/PreviewDemo";
import Analyzes from "@/components/Analyzes";
import WhatYouReceive from "@/components/WhatYouReceive";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import RequestSection from "@/components/RequestSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

/** Section order follows the approved prototype exactly. */
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <HowItWorks />
        <WhoItsFor />
        <RealOutput />
        <PreviewDemo />
        <Analyzes />
        <WhatYouReceive />
        <Pricing />
        <Faq />
        <RequestSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
