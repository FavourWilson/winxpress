




// ── Audience ─────────────────────────────────────────────────────────────────

import Audience from "../component/Audience";
import FinalCTA from "../component/FInalCTA";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import HowItWorks from "../component/HowItWorks";
import Nav from "../component/Nav";
import ParentApp from "../component/ParentApp";
import Pricing from "../component/Pricing";
import Problem from "../component/Problem";
import Product from "../component/Product";
import SocialProof from "../component/SocialProof";
import Trust from "../component/Trust";

export default function ForSchool() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Product />
        <HowItWorks />
        <ParentApp />
        <Audience />
        <Pricing />
        <Trust />
        <SocialProof />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}