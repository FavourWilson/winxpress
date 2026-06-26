
import Audience from "../component/Audience";
import FinalCTA from "../component/FInalCTA";
import Hero from "../component/Hero";
import HowItWorks from "../component/HowItWorks";
import ParentApp from "../component/ParentApp";
import Pricing from "../component/Pricing";
import Problem from "../component/Problem";
import Product from "../component/Product";
import SocialProof from "../component/SocialProof";
import Trust from "../component/Trust";
import SiteShell from "../component/SIteShell";

export default function ForSchool() {
  return (
    <SiteShell>
    <div className="min-h-screen bg-background">
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
    </div>
    </SiteShell>
  );
}